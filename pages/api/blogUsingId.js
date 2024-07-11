import Blog from "../../models/Blog";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  const { ids } = req.query;
  const idsArray = Array.isArray(ids) ? ids : [ids];
  console.log("idsArray",idsArray)

  try {
    const blogs = await Blog.find({ id: { $in: idsArray } }, 'title thumbnail slug id coverphoto');
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching documents' });
  }
}


export default connectDb(handler);