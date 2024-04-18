// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "../../../../middleware/mongoose";
import Newcasestudy from "../../../../models/Newcasestudy";


const handler = async (req, res) => {
    let data = await Newcasestudy.find().sort({ sequence: -1 });
    res.status(200).json({ data });
}


export default connectDb(handler);
