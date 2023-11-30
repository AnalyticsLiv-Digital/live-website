// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Casestudy from "../../models/Casestudy";
import connectDb from "../../middleware/mongoose";


const handler = async (req, res) => {
    let data = await Casestudy.find({slug:req.query.slug}).sort({ sequence: -1 });
    res.status(200).json({ data });
}


export default connectDb(handler);
