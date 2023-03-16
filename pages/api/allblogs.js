// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Blog from "../../models/Blog";
import connectDb from "../../middleware/mongoose";


const handler = async (req, res) => {
    let blog = await Blog.find({active:true}, { title: 1, description: 2,thumbnail:3, slug:4, author:5, date:6 }).sort({ sequence: -1 });
    res.status(200).json({ blog });
}


export default connectDb(handler);
