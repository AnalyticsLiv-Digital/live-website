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
              pass: "ajfobwvuzbkzpcwg"
            }
          });
          
    

          var mailOptions1 = {
            from: "support@analyticsliv.com",
            to: ["ashwani.singh@analyticsliv.com","sales@analyticsliv.com","anshul.d@analyticsliv.com","anuj@analyticsliv.com","nitya@analyticsliv.com","chirag.rathod@analyticsliv.com","esha.chhaparwal@analyticsliv.com","rajvi@analyticsliv.com"],
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

          var transporter2 = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: "sales@analyticsliv.com",
              pass: "dnrbtjcwznyhouvo"
            }
          });
          
    
  
          var mailOptions2 = {
            from: "sales@analyticsliv.com",
            to: [req.body.email, "anuj@analyticsliv.com"],
            subject: 'Analyticsliv - Thankyou for contacting us.',
            html: `Hi ${req.body.fullName},<br>
            Thank you for reaching out to AnalyticsLiv, one of the fastest growing Google Marketing Platform Partner in India. Our Services have empowered more than 500 businesses to use first party data for analysis and marketing purposes, making businesses independent of third party data intelligence.<br>
            
            We will study the details you have shared and will get back to you with a response to help your business. Meanwhile, you can have a look through our services on <a href="https://analyticsliv.com">www.analyticsliv.com </a> or for any quick chat, contact us at: <br>
            Mobile: <a href="tel:+918320576622">+91 83205 76622</a> <br>
            Email: <a href="mailto:support@analyticsliv.com" class="">support@analyticsliv.com</a>`
          };
          
          transporter2.sendMail(mailOptions2, function(error, info){
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
