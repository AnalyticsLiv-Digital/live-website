// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Casestudylead from "../../models/Casestudylead";
import Casestudy from "../../models/Casestudy";
import connectDb from "../../middleware/mongoose";
import { sendEmail } from "../../utils/sendMail";
import { sendDataToGoogleSheet } from "../../utils/caseStudyLeadInShet";

const handler = async (req, res) => {
  if (req.method == 'POST') {
    // api to send lead in google sheet
    const url = "https://script.google.com/macros/s/AKfycbxhG3yAOlfba9JRbr4eDdjBYFVfeOvP0j9Xznoc4CLH7J61OJdhc18uzh9cAdyfAo4hzw/exec";
    sendDataToGoogleSheet(url, {
      "name": req.body.fullName,
      "email": req.body.email,
      "company": req.body.company
    })

    let data = await Casestudy.find({ id: req.body.id }, { filename: 1 });
    let b = new Casestudylead({
      fullName: req.body.fullName,
      email: req.body.email,
      casestudy: req.body.casestudy,
      company: req.body.company
    });
    await b.save();

    var userMailOptions = {
      from: "support@analyticsliv.com",
      to: req.body.email,
      subject: 'AnalyticsLiv - Download link for the case study',
      html: `<div id="title"><h3>Thankyou for showing interest on our Case Study!!</h3></div><div id="content">To download the Case Study on ${req.body.casestudy}, Please click <a href="${req.body.pdf ? req.body.pdf : data[0].filename}">here</a>.</div>`
    };

    var internalMailOptions = {
      from: "support@analyticsliv.com",
      to: ["pruthvirajsinh.rathod@analyticsliv.com"],
      subject: 'Casestudy Download',
      html: `Case study downloaded by <br> Name - ${req.body.fullName} <br> Email- ${req.body.email} <br> Casestudy - ${req.body.casestudy} <br> Company - ${req.body.company}`
    };

    await sendEmail(internalMailOptions.to, internalMailOptions.subject, internalMailOptions.html, internalMailOptions?.from);
    await sendEmail(userMailOptions.to, userMailOptions.subject, userMailOptions.html, userMailOptions?.from);



  } else {
    res.status(400).json({ error: "Bad Request" });
  }

  let casestudylead = await Casestudylead.find();
  res.status(200).json({ casestudylead });
}


export default connectDb(handler);