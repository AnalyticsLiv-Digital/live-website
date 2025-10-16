const axios = require('axios');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const resumeData = req.body;

    // Validate required fields
    if (!resumeData.NAME || !resumeData.JD) {
      return res.status(400).json({ error: 'NAME and JD are required fields' });
    }

    // Call the external API using axios
    const response = await axios.post(
      'https://candidate-analysis-135392845747.europe-west1.run.app/score/sections',
      resumeData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return res.status(200).json(response.data);

  } catch (error) {
    console.error('Error in resume scoring proxy:', error);
    return res.status(error.response?.status || 500).json({
      error: 'Failed to score resume',
      details: error.response?.data || error.message
    });
  }
}
