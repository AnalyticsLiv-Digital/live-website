// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Blog from "../../models/Blog";
import connectDb from "../../middleware/mongoose";


const handler = async (req, res) => {
    let blog = await Blog.find({active:true},{title:1,thumbnail:2,slug:4}).limit(2);
    res.status(200).json({ blog });
}


export default connectDb(handler);
