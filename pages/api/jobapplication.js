// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Jobapplication from "../../models/Jobapplication";
import connectDb from "../../middleware/mongoose";
var nodemailer = require('nodemailer');

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let b = new Jobapplication({
            firstName: req.body.firstName,
            postName : req.body.postName,
            lastName: req.body.lastName,
            email: req.body.email,
            contact: req.body.contact,
            experience: req.body.experience,
            linkedin: req.body.linkedin,
            resume: req.body.resume,
            post: req.body.post
        });
        await b.save();
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: "support@analyticsliv.com",
              pass: "nrmozaskburvfdaj"
            }
          });
          
    

          var mailOptions1 = {
            from: "support@analyticsliv.com",
            to: ["anshul.d@analyticsliv.com","hr@analyticsliv.com","aashana.pathak@analyticsliv.com"],
            subject: 'New Job Application!!',
            html: `Application Submitted by <br> First Name - ${req.body.firstName} <br>Lastname- ${req.body.lastName} <br> Email- ${req.body.email} <br> Contact - ${req.body.contact} <br> Job Title- ${req.body.postName}  <br> Resume -<a href="https://storage.googleapis.com/website-bucket-uploads/${req.body.resume}">Link</a>  <br> Linkedin -${req.body.linkedin} <br> Experience -${req.body.experience}`
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
    let jobapplication = await Jobapplication.find();
    res.status(200).json({ jobapplication });
}


export default connectDb(handler);
