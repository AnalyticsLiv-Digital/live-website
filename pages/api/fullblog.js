// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Blog from "../../models/Blog";
import connectDb from "../../middleware/mongoose";


const handler = async (req, res) => {
    let blog = await Blog.find({slug:req.query.slug});
    res.status(200).json({ blog });
}


export default connectDb(handler);
