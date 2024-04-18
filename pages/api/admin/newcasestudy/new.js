// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Newcasestudy from "../../../../models/Newcasestudy"
import connectDb from "../../../../middleware/mongoose";


const handler = async (req, res) => {
    if (req.method == 'POST') {

            let b = new Newcasestudy(req.body);
        await b.save();
       

    } else {
        res.status(400).json({ error: "Bad Request" });
    }
    let casestudy = await Newcasestudy.find();
    res.status(200).json({ casestudy });
}


export default connectDb(handler);
