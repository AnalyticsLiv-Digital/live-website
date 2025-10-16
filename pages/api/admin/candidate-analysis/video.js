const formidable = require('formidable');
const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const form = formidable({
    multiples: false,
  });

  // Parse the form data
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Error parsing form:', err);
      return res.status(400).json({ error: 'Failed to parse upload', details: err.message });
    }

    const videoFile = files.file;

    if (!videoFile) {
      return res.status(400).json({ error: 'No video file provided' });
    }

    try {
      // Create form data to send to external API
      const formData = new FormData();
      formData.append('file', fs.createReadStream(videoFile.filepath || videoFile.path), {
        filename: videoFile.originalFilename || videoFile.name,
        contentType: videoFile.mimetype || videoFile.type,
      });

      // Call the external API using axios
      const response = await axios.post(
        'https://candidate-analysis-135392845747.europe-west1.run.app/analyze-video/',
        formData,
        {
          headers: formData.getHeaders(),
        }
      );

      // Clean up temporary file
      fs.unlinkSync(videoFile.filepath || videoFile.path);

      return res.status(200).json(response.data);

    } catch (error) {
      console.error('Error in video analysis proxy:', error);

      // Clean up file if it exists
      try {
        const filepath = videoFile.filepath || videoFile.path;
        if (filepath && fs.existsSync(filepath)) {
          fs.unlinkSync(filepath);
        }
      } catch (cleanupError) {
        console.error('Error cleaning up file:', cleanupError);
      }

      return res.status(error.response?.status || 500).json({
        error: 'Failed to analyze video',
        details: error.response?.data || error.message
      });
    }
  });
}
