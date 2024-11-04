// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Gtmcontact from "../../models/Gtmcontact";
import connectDb from "../../middleware/mongoose";
import { sendEmail } from "../../utils/sendMail";

const handler = async (req, res) => {
  if (req.method == 'POST') {

    fetch('https://script.google.com/macros/s/AKfycbzzDNTOkygX5WJA9vcnns-fEF6L4VIKy3qE2kcBpMF7J-Rf39Ee-ilPMkiFhAv7I2EN/exec?fullname=' + req.body.fullName + '&email=' + req.body.email + '&contact=' + req.body.contact + '&message=' + req.body.message + '&website=' + req.body.website);
    let b = new Gtmcontact({
      fullName: req.body.fullName,
      email: req.body.email,
      contact: req.body.contact,
      message: req.body.message,
      website: req.body.website

    });
    await b.save();

    var internalMailOptions = {
      from: "support@analyticsliv.com",
      to: [ "sales@analyticsliv.com", "anshul.d@analyticsliv.com", "anuj@analyticsliv.com", "nitya@analyticsliv.com", "rajvi@analyticsliv.com", "ansuya@analyticsliv.com","aditya.trivedi@analyticsliv.com","tanu.singh@analyticsliv.com"],
      subject: 'New GTM Enquiry!!',
      html: `Enquiry Submitted by <br> Full Name - ${req.body.fullName}  <br> Email- ${req.body.email} <br> Contact - ${req.body.contact} <br> Message - ${req.body.message} <br> Website - ${req.body.website} `
    };


    var userMailOptions = {
      from: "sales@analyticsliv.com",
      to: [req.body.email, "anuj@analyticsliv.com"],
      subject: 'Analyticsliv - Thankyou for contacting us.',
      html: `Hi ${req.body.fullName},<br>
          Thank you for reaching out to AnalyticsLiv, one of the fastest growing Google Marketing Platform Partner in India. Our Services have empowered more than 500 businesses to use first party data for analysis and marketing purposes, making businesses independent of third party data intelligence.<br>
          
          We will study the details you have shared and will get back to you with a response to help your business. Meanwhile, you can have a look through our services on <a href="https://analyticsliv.com">www.analyticsliv.com </a> or for any quick chat, contact us at: <br>
          Mobile: <a href="tel:+918320576622">+91 83205 76622</a> <br>
          Email: <a href="mailto:support@analyticsliv.com" class="">support@analyticsliv.com</a>`
    };

    await sendEmail(internalMailOptions.to, internalMailOptions.subject, internalMailOptions.html, internalMailOptions?.from);
    await sendEmail(userMailOptions.to, userMailOptions.subject, userMailOptions.html, userMailOptions?.from);

  } else {
    res.status(400).json({ error: "Bad Request" });
  }
  let contact = await Gtmcontact.find();
  res.status(200).json({ contact });
}


export default connectDb(handler);
