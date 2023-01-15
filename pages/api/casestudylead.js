// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Casestudylead from "../../models/Casestudylead";
import Casestudy from "../../models/Casestudy";
import connectDb from "../../middleware/mongoose";
var nodemailer = require('nodemailer');

const handler = async (req, res) => {
    if (req.method == 'POST') {
      let data = await Casestudy.find({id:req.body.id},{filename:1});
      console.log(data);
        let b = new Casestudylead({
            fullName: req.body.fullName,
            email: req.body.email,
            casestudy: req.body.casestudy,
            company: req.body.company
        });
        await b.save();

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: "support@analyticsliv.com",
              pass: "hbyzdhukcasgmghq"
            }
          });
          
          var mailOptions = {
            from: "support@analyticsliv.com",
            to: req.body.email,
            subject: 'AnalyticsLiv - Download link for the case study',
            html: `<html><head><style>#container{position:relative;width:100%;height:300px;display: flex;justify-content: center;}#bod{position:relative;width:500px;height: 300px;text-align:center;}</style></head><body><div id="container"><div id="bod"><img style="width:300;height:50;margin-top:30px; margin-bottom:10px;" src="https://storage.googleapis.com/website-bucket-uploads/logo.png"/><div id="title"><h3>Thankyou for showing interest on our Case Study!!</h3></div><div id="content">To download the Case Study on ${req.body.casestudy}, Please click <a href="${data[0].filename}">here</a>.</div></div></div></body></html>`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });


         

          var mailOptions1 = {
            from: "support@analyticsliv.com",
            to: "anshul.d@analyticsliv.com",
            subject: 'Casestudy Download',
            html: `Case study downloaded by <br> Name - ${req.body.fullName} <br> Email- ${req.body.email} <br> Casestudy - ${req.body.casestudy} <br> Company - ${req.body.company}`
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
    
    let casestudylead = await Casestudylead.find();
    res.status(200).json({ casestudylead });
}


export default connectDb(handler);
