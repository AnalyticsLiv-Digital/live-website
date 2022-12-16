// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Casestudylead from "../../models/Casestudylead";
import connectDb from "../../middleware/mongoose";


const handler = async (req, res) => {
    if (req.method == 'POST') {
        let b = new Casestudylead({
            fullName: req.body.fullName,
            email: req.body.email,
            casestudy: req.body.casestudy,
            company: req.body.company
        });
        await b.save();

    } else {
        res.status(400).json({ error: "Bad Request" });
    }
    let casestudylead = await Casestudylead.find();
    res.status(200).json({ casestudylead });
}


export default connectDb(handler);
