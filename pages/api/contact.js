// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Contact from "../../models/Contact";
import connectDb from "../../middleware/mongoose";
var nodemailer = require('nodemailer');

const handler = async (req, res) => {
    if (req.method == 'POST') {

      fetch('https://script.google.com/macros/s/AKfycbxS43B15oUP4-LaHnzA5KZ5ly7OgE59ZQpvujB1TRGDvt48JpHVa92OPlq9zPPQ7V7N4g/exec?firstName='+req.body.firstName+'&lastName='+req.body.lastName+'&email='+req.body.email+'&contact='+req.body.contact+'&role='+req.body.role+'&purpose='+req.body.purpose+'&requirements='+req.body.requirments+'&company='+req.body.company);
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
              pass: "ajfobwvuzbkzpcwg"
            }
          });
          
    

          var mailOptions1 = {
            from: "support@analyticsliv.com",
            to: ["sales@analyticsliv.com","anuj@analyticsliv.com","nitya@analyticsliv.com","rajvi@analyticsliv.com","anshul.d@analyticsliv.com"],
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
            html: `Hi ${req.body.firstName},<br>
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
    let contact = await Contact.find();
    res.status(200).json({ contact });
}


export default connectDb(handler);
