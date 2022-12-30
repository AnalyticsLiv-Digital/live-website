// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Blog from "../../../../models/Blog";
import connectDb from "../../../../middleware/mongoose";


const handler = async (req, res) => {
    if (req.method == 'POST') {
        if(req.body.cookie == "fiif348df9fj34r3"){
            let blog = await Blog.find({slug:'data-analytics-helps-in-enhancing-customer-experiences'});
            res.status(200).json({ blog });
        }else{
            res.status(200).json({ message : "failed" });
        }
        
    
}
}

export default connectDb(handler);
