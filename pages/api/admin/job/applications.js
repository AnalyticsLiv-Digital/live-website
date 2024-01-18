// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Jobapplication from "../../../../models/Jobapplication";
import connectDb from "../../../../middleware/mongoose";


const handler = async (req, res) => {
    let job = await Jobapplication.find({post:req.query.post}).sort({timestamp:'-1'});
    res.status(200).json({ job });
}


export default connectDb(handler);
