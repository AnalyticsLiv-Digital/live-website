// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Blog from "../../../../models/blog";
import connectDb from "../../../../middleware/mongoose";


const handler = async (req, res) => {
    if (req.method == 'POST') {
        if(req.body.cookie == "fiif348df9fj34r3"){
            let blog = await Blog.find();
            res.status(200).json({ blog });
        }else{
            res.status(200).json({ message : "failed" });
        }
        
    
}
}

export default connectDb(handler);
