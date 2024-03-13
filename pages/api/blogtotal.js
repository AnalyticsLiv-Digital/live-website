// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Blog from "../../models/Blog";
import connectDb from "../../middleware/mongoose";


const handler = async (req, res) => {
    let count = await Blog.find({active:"true"}).count();
    let pages = Math.ceil(count/12);
    res.status(200).json({ pages });
}


export default connectDb(handler);
