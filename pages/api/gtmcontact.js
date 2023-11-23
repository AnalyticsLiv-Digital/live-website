// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Gtmcontact from "../../models/Gtmcontact";
import connectDb from "../../middleware/mongoose";
var nodemailer = require('nodemailer');

const handler = async (req, res) => {
    if (req.method == 'POST') {

     fetch('https://script.google.com/macros/s/AKfycbzzDNTOkygX5WJA9vcnns-fEF6L4VIKy3qE2kcBpMF7J-Rf39Ee-ilPMkiFhAv7I2EN/exec?fullname='+req.body.fullName+'&email='+req.body.email+'&contact='+req.body.contact+'&message='+req.body.message+'&website='+req.body.website);
        let b = new Gtmcontact({
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
              pass: "cwsixwpdigzaishz"
            }
          });
          
    

          var mailOptions1 = {
            from: "support@analyticsliv.com",
            to: ["sales@analyticsliv.com","anshul.d@analyticsliv.com","anuj@analyticsliv.com","nitya@analyticsliv.com","rajvi@analyticsliv.com","ansuya@analyticsliv.com"],
            subject: 'New GTM Enquiry!!',
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
    let contact = await Gtmcontact.find();
    res.status(200).json({ contact });
}


export default connectDb(handler);
