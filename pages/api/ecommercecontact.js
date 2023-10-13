// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Ecommercecontact from "../../models/Ecommercecontact";
import connectDb from "../../middleware/mongoose";
var nodemailer = require('nodemailer');

const handler = async (req, res) => {
    if (req.method == 'POST') {

      fetch('https://script.google.com/macros/s/AKfycbzWQAOGB9S6Mzp8U8hmHqYB7zZ_6NjdXFMgnzcimt1ozEJHsU_TG0j5w0Wm8GgU3ciC/exec?fullname='+req.body.fullName+'&email='+req.body.email+'&contact='+req.body.contact+'&message='+req.body.message+'&website='+req.body.website);
        let b = new Ecommercecontact({
            fullName: req.body.fullName,
            email: req.body.email,
            contact: req.body.contact,
            message: req.body.message,
            website : req.body.website
            
        });
        await b.save();
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: "support@analyticsliv.com",
              pass: "zatpcydufqhpwvlk"
            }
          });
          
    

          var mailOptions1 = {
            from: "support@analyticsliv.com",
            to: ["anshul.d@analyticsliv.com"],
            subject: 'New Ecommerce Enquiry!!',
            html: `Enquiry Submitted by <br> Full Name - ${req.body.fullName}  <br> Email- ${req.body.email} <br> Contact - ${req.body.contact} <br> Message - ${req.body.message} <br> Website - ${req.body.website} `
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
    let contact = await Ecommercecontact.find();
    res.status(200).json({ contact });
}


export default connectDb(handler);
