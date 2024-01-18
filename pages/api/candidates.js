// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Jobapplication from "../../models/Jobapplication";
import connectDb from "../../middleware/mongoose";


const handler = async (req, res) => {

    let jobapplication = await Jobapplication.find({post : req.query.post});
    res.status(200).json({ jobapplication });
}


export default connectDb(handler);