// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Job from "../../models/Job";
import connectDb from "../../middleware/mongoose";


const handler = async (req, res) => {
    let job = await Job.find();
    res.status(200).json({ job });
}


export default connectDb(handler);
