import formidable from 'formidable';
import axios from 'axios';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse the multipart form data using callback style
    const form = formidable({});

    const files = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        else resolve(files);
      });
    });

    const file = files.file?.[0] || files.file;

    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Get base URL from environment or use a default
    const baseUrl = process.env.RESUME_PARSE_BASE_URL || 'https://candidate-analysis-135392845747.europe-west1.run.app';

    // Read file - handle both filepath and path properties (different formidable versions)
    const filePath = file.filepath || file.path;
    const fileBuffer = fs.readFileSync(filePath);
    const boundary = '----WebKitFormBoundary' + Math.random().toString(36).substring(2);

    // Build multipart form data manually
    const formDataParts = [];
    formDataParts.push(`--${boundary}\r\n`);
    formDataParts.push(`Content-Disposition: form-data; name="file"; filename="${file.originalFilename || file.name}"\r\n`);
    formDataParts.push(`Content-Type: ${file.mimetype || file.type || 'application/octet-stream'}\r\n\r\n`);

    const header = Buffer.from(formDataParts.join(''));
    const footer = Buffer.from(`\r\n--${boundary}--\r\n`);
    const formDataBuffer = Buffer.concat([header, fileBuffer, footer]);

    // Call the external resume parsing API
    const response = await axios.post(
      `${baseUrl}/resume-parse`,
      formDataBuffer,
      {
        headers: {
          'Content-Type': `multipart/form-data; boundary=${boundary}`,
        },
        maxBodyLength: Infinity,
        maxContentLength: Infinity,
      }
    );

    // Clean up the temporary file
    fs.unlinkSync(filePath);

    return res.status(200).json(response.data);

  } catch (error) {
    console.error('Error in resume parsing proxy:', error);
    return res.status(error.response?.status || 500).json({
      error: 'Failed to parse resume',
      details: error.response?.data || error.message
    });
  }
}
