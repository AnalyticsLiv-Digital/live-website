// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Dv360contact from "../../models/Dv360contact";
import connectDb from "../../middleware/mongoose";
var nodemailer = require('nodemailer');

const handler = async (req, res) => {
    if (req.method == 'POST') {

      fetch('https://script.google.com/macros/s/AKfycbxVpjOJZxxAySTkuvHYc4D6Hl-XYhOHXQhBRWwJKajepUE13dmr0Ek0TH-ar5KwRhLD/exec?fullname='+req.body.fullName+'&email='+req.body.email+'&contact='+req.body.contact+'&message='+req.body.message+'&website='+req.body.website);
        let b = new Dv360contact({
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
            to: ["anshul.d@analyticsliv.com","anuj@analyticsliv.com","nitya@analyticsliv.com","shilpi@analyticsliv.com"],
            subject: 'New DV360 Enquiry!!',
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
    let contact = await Dv360contact.find();
    res.status(200).json({ contact });
}


export default connectDb(handler);
