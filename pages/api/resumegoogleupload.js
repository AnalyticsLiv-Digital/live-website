import { Storage } from '@google-cloud/storage';
const path = require('path');

export default async function handler(req, res) {
  const storage = new Storage({
    projectId: process.env.project_id,
    credentials: {
      client_email: process.env.client_email,
      private_key: process.env.private_key,
    },
  });

  
    
    var extension = path.extname(req.query.file);
    var x = Date.now() +''+ Math.floor(Math.random() * 1000);
    var newPath = x + extension;

  const bucket = storage.bucket(process.env.bucket);
  const file = bucket.file(newPath);
  const options = {
    expires: Date.now() + 1 * 60 * 1000, //  1 minute,
    fields: { 'x-goog-meta-test': 'data' },
  };
//https://storage.googleapis.com/website-bucket-uploads/shoebacca.png
  const [response] = await file.generateSignedPostPolicyV4(options);

  res.status(200).json(response);
}