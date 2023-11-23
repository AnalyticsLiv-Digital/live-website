// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Contact from "../../models/Contact";
import connectDb from "../../middleware/mongoose";
var nodemailer = require('nodemailer');

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let b = new Contact({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            contact: req.body.contact,
            role: req.body.role,
            purpose: req.body.purpose,
            requirments: req.body.requirments,
            company: req.body.company
        });
        await b.save();
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: "support@analyticsliv.com",
              pass: "cwsixwpdigzaishz"
            }
          });
          
    

          var mailOptions1 = {
            from: "support@analyticsliv.com",
            to: ["sales@analyticsliv.com","anuj@analyticsliv.com","nitya@analyticsliv.com","anshul.d@analyticsliv.com"],
            subject: 'New Enquiry!!',
            html: `Enquiry Submitted by <br> First Name - ${req.body.firstName} <br>Lastname- ${req.body.lastName} <br> Email- ${req.body.email} <br> Contact - ${req.body.contact} <br> Company - ${req.body.company} <br> Role- ${req.body.role} <br> Purpose - ${req.body.purpose} <br> Requirements -${req.body.requirments}`
          };
          
          transporter.sendMail(mailOptions1, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });

    } else {
        res.status(400).json({ error: "Bad Request" });
    }
    let contact = await Contact.find();
    res.status(200).json({ contact });
}


export default connectDb(handler);
