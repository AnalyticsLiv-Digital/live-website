// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Contact from "../../../models/Contact";
import connectDb from "../../../middleware/mongoose";


const handler = async (req, res) => {
    if (req.method == 'POST') {
        if(req.body.cookie == "fiif348df9fj34r3"){
            let contact = await Contact.find();
            res.status(200).json({ contact });
        }else{
            res.status(200).json({ message : "failed" });
        }
        
    
}
}

export default connectDb(handler);
