// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Ga4contact from "../../models/Ga4contact";
import connectDb from "../../middleware/mongoose";
var nodemailer = require('nodemailer');

const handler = async (req, res) => {
    if (req.method == 'POST') {

      fetch('https://script.google.com/a/macros/analyticsliv.com/s/AKfycbzK9zVbEjRBYOQL48eu8aieCPbb1bvWmDLY2GJXrKVnmi7hHLYzrdEYyqGd3zrCiYYT/exec?fullname='+req.body.fullName+'&email='+req.body.email+'&contact='+req.body.contact+'&message='+req.body.message);
        let b = new Ga4contact({
            fullName: req.body.fullName,
            email: req.body.email,
            contact: req.body.contact,
            message: req.body.message
            
        });
        await b.save();
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: "support@analyticsliv.com",
              pass: "hmilmotftrbacqwp"
            }
          });
          
    
//,"anuj@analyticsliv.com","nitya@analyticsliv.com","rajvi@analyticsliv.com","ansuya@analyticsliv.com"
          var mailOptions1 = {
            from: "support@analyticsliv.com",
            to: ["anshul.d@analyticsliv.com"],
            subject: 'New Enquiry!!',
            html: `Enquiry Submitted by <br> Full Name - ${req.body.fullName}  <br> Email- ${req.body.email} <br> Contact - ${req.body.contact} <br> Message - ${req.body.message} `
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
    let contact = await Ga4contact.find();
    res.status(200).json({ contact });
}


export default connectDb(handler);
