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
