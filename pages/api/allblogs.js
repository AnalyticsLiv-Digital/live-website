// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Blog from "../../models/Blog";
import connectDb from "../../middleware/mongoose";


const handler = async (req, res) => {
    var page = req.query.page;
    var num = (page-1)*9;
    let blog = await Blog.find({active:true}, { title: 1, description: 2,thumbnail:3, slug:4, author:5, date:6 }).sort({ sequence: -1 }).skip(num).limit(6);;
    res.status(200).json({ blog });
}


export default connectDb(handler);