import CookieContact from "../../../models/CookieContact";
import connectDb from "../../../middleware/mongoose";
import { sendEmail } from "../../../utils/sendMail";

const handler = async (req, res) => {
  if (req.method == 'POST') {

    fetch('https://script.google.com/a/macros/analyticsliv.com/s/AKfycbyTZ8cSxnbJnAATesckEfLHiza2ovYoq2XgOC-WQrWob9tGwlE7hToRWR3ZrcEr6Xov/exec?fname=' + req.body.fullName + '&email=' + req.body.email + '&contact=' + req.body.contact + '&company=' + req.body.company);
    let b = new CookieContact({
      fullName: req.body.fullName,
      email: req.body.email,
      contact: req.body.contact,
    //   message: req.body.message,
      company: req.body.company

      
    });
    await b.save();

      var internalMailOptions = {
          from: "support@analyticsliv.com",
          //   to:"atulverma@analyticsliv.com",
          to: ["sales@analyticsliv.com" ,"anshul.d@analyticsliv.com", "anuj@analyticsliv.com", "nitya@analyticsliv.com", "rajvi@analyticsliv.com", "abhishek.tiwari@analyticsliv.com", "shubhangi@analyticsliv.com"],
          subject: 'New Registartion for Cookie-consent webinar.',
          html: `Enquiry Submitted by <br> Full Name - ${req.body.fullName}  <br> Email- ${req.body.email} <br> Contact - ${req.body.contact} <br> Message - ${req.body.message} <br> Website - ${req.body.company} `
      };


    var userMailOptions = {
      from: "sales@analyticsliv.com",
        to: [req.body.email],
        subject: 'Analyticsliv - Thankyou for registering.',
        html: `Hi ${req.body.fullName},<br>
                Thank you for registering for our webinar on Cookie Consent hosted by AnalyticsLiv, a leading Google Marketing Platform Partner in India. We are excited to have you join us as we explore best practices and strategies to
                 manage cookie consent and ensure compliance with privacy regulations.<br>

                We will send you more details about the webinar shortly. Meanwhile, feel free to browse through our services at <a href="https://analyticsliv.com">www.analyticsliv.com</a>. If you have any questions, don't hesitate to reach out to us:<br>
                Mobile: <a href="tel:+918320576622">+91 83205 76622</a> <br>
                Email: <a href="mailto:support@analyticsliv.com">support@analyticsliv.com</a><br>`
    };

    await sendEmail(internalMailOptions.to, internalMailOptions.subject, internalMailOptions.html, internalMailOptions?.from);
    await sendEmail(userMailOptions.to, userMailOptions.subject, userMailOptions.html, userMailOptions?.from);

  } else {
    res.status(400).json({ error: "Bad Request" });
  }
  let contact = await CookieContact.find();
  res.status(200).json({ contact });
}


export default connectDb(handler);
