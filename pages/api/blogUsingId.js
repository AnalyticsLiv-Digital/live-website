import Blog from "../../models/Blog";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { ids } = req.body;
  
  // Ensure ids is an array
  const idsArray = Array.isArray(ids) ? ids : [ids];

  try {
    const blogs = await Blog.find({ id: { $in: idsArray } }, 'title thumbnail slug id coverphoto');
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching documents' });
  }
};

export default connectDb(handler);
