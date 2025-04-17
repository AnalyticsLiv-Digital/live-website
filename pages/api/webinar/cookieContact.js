import CookieContact from "../../../models/CookieContact";
import connectDb from "../../../middleware/mongoose";
import { sendEmail } from "../../../utils/sendMail";
import { generateEmailTemplate } from "../../../utils/webinalTemplate";

const handler = async (req, res) => {
  if (req.method == 'POST') {

    fetch('https://script.google.com/a/macros/analyticsliv.com/s/AKfycbyTZ8cSxnbJnAATesckEfLHiza2ovYoq2XgOC-WQrWob9tGwlE7hToRWR3ZrcEr6Xov/exec?fname=' + req.body.fullName + '&email=' + req.body.email + '&contact=' + req.body.contact + '&company=' + req.body.company);
    let b = new CookieContact({
      fullName: req.body.fullName,
      email: req.body.email,
      contact: req.body.contact,
      //   message: req.body.message,
      company: req.body.company,
      type: req.body.type,
    });
    await b.save();

    var internalMailOptions = {
      from: "support@analyticsliv.com",
      //   to:"atulverma@analyticsliv.com",
      to: ["sales@analyticsliv.com", "anshul.d@analyticsliv.com", "anuj@analyticsliv.com", "nitya@analyticsliv.com", "rajvi@analyticsliv.com", "abhishek.tiwari@analyticsliv.com", "shubhangi@analyticsliv.com"],
      subject: 'New Registartion for Irec Summit.',
      html: `Enquiry Submitted by <br> Full Name - ${req.body.fullName}  <br> Email- ${req.body.email} <br> Contact - ${req.body.contact} <br> Message - ${req.body.message} <br> Website - ${req.body.company} <br> Type - ${req.body.type} `
    };


    var userMailOptions = {
      from: "sales@analyticsliv.com",
      to: [req.body.email],
      subject: '🙏 Thank You for Registering!',
      html: generateEmailTemplate(req.body.fullName)
    };

    await Promise.all([
      sendEmail(internalMailOptions.to, internalMailOptions.subject, internalMailOptions.html, internalMailOptions?.from),
      sendEmail(userMailOptions.to, userMailOptions.subject, userMailOptions.html, userMailOptions?.from),
    ])

  } else {
    res.status(400).json({ error: "Bad Request" });
  }
  let contact = await CookieContact.find();
  res.status(200).json({ contact });
}


export default connectDb(handler);
