// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Jobapplication from "../../models/Jobapplication";
import connectDb from "../../middleware/mongoose";


const handler = async (req, res) => {
    if (req.method == 'POST') {
        let b = new Jobapplication({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            contact: req.body.contact,
            experience: req.body.experience,
            linkedin: req.body.linkedin,
            resume: req.body.resume,
            post: req.body.post
        });
        await b.save();

    } else {
        res.status(400).json({ error: "Bad Request" });
    }
    let jobapplication = await Jobapplication.find();
    res.status(200).json({ jobapplication });
}


export default connectDb(handler);
