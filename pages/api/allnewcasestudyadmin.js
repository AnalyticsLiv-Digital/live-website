// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Newcasestudy from "../../models/Newcasestudy";
import connectDb from "../../middleware/mongoose";


const handler = async (req, res) => {
    let casestudy = await Newcasestudy.find({}, { cstitle: 1, description: 2,coverimage:3, slug:4,file:6, active:7 }).sort({ id: -1 });
    res.status(200).json({ casestudy });
}


export default connectDb(handler);
