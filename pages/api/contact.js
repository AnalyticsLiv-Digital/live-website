// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Contact from "../../models/Contact";
import connectDb from "../../middleware/mongoose";


const handler = async (req, res) => {
    if (req.method == 'POST') {
        let b = new Contact({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            country: req.body.country,
            contact: req.body.contact,
            role: req.body.role,
            purpose: req.body.purpose,
            requirments: req.body.requirments,
            company: req.body.company
        });
        await b.save();

    } else {
        res.status(400).json({ error: "Bad Request" });
    }
    let contact = await Contact.find();
    res.status(200).json({ contact });
}


export default connectDb(handler);
