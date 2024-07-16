import fetch from 'node-fetch';
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { user, blog_id, blog_title } = req.query;

    if (!user || !blog_id || !blog_title) {
        return res.status(400).json({ error: 'Missing required parameters' });
    }

    const recommendationEngineUrl = `https://us-central1-dx-api-project.cloudfunctions.net/recommendation-engine?user=${user}&blog_id=${blog_id}&blog_title=${blog_title}`;

    try {
        // Call the recommendation engine
        const recommendationResponse = await fetch(recommendationEngineUrl);

        if (!recommendationResponse.ok) {
            throw new Error('Error fetching recommendations');
        }

        const recommendedIds = await recommendationResponse.json();

        if (!Array.isArray(recommendedIds) || recommendedIds.length === 0) {
            return res.status(404).json({ error: 'No recommendations found' });
        }

        // Call the internal API to get blog data
        const blogsResponse = await fetch(`${process.env.domain}/api/blogUsingId`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ids: recommendedIds }),
        });

        if (!blogsResponse.ok) {
            throw new Error('Error fetching blog data');
        }

        const blogs = await blogsResponse.json();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default connectDb(handler);
