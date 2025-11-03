const axios = require('axios');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { video_url } = req.body;

    if (!video_url) {
      return res.status(400).json({ error: 'No video URL provided' });
    }

    console.log('Processing video from GCS URL:', video_url);

    // Call the external API with the GCS URL
    const response = await axios.post(
      'https://candidate-analysis-135392845747.europe-west1.run.app/analyze-video-from-gcs/',
      {
        video_url: video_url
      },
      {
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 600000, // 10 minutes for video processing
      }
    );

    return res.status(200).json(response.data);

  } catch (error) {
    console.error('Error in video analysis:', error);

    return res.status(error.response?.status || 500).json({
      error: 'Failed to analyze video',
      details: error.response?.data || error.message
    });
  }
}
