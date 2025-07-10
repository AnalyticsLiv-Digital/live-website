import CookieContact from "../../../models/CookieContact";
import connectDb from "../../../middleware/mongoose";
import { sendEmail } from "../../../utils/sendMail";
import { generateLookerEmailTemplate } from "../../../utils/webinalTemplate";

const handler = async (req, res) => {
  if (req.method == 'POST') {

    fetch('https://script.google.com/macros/s/AKfycbwTXnR62UYYH8QE6o_azyJmp6jK99IvT-maw4q1APBVdr4-eR0kH_Sy-vErAZzPDF8E/exec?fname=' + req.body.fullName + '&email=' + req.body.email + '&contact=' + req.body.contact + '&company=' + req.body.company + '&profession=' + req.body.profession);
    let b = new CookieContact({
      fullName: req.body.fullName,
      email: req.body.email,
      contact: req.body.contact,
      //   message: req.body.message,
      company: req.body.company,
      profession: req.body.profession,
      type: req.body.type,
    });
    await b.save();

    var internalMailOptions = {
      from: "support@analyticsliv.com",
      // to:"atul.verma@analyticsliv.com",
      to: ["sales@analyticsliv.com", "anuj@analyticsliv.com", "nitya@analyticsliv.com", "rajvi@analyticsliv.com", "abhishek.tiwari@analyticsliv.com", "shubhangi@analyticsliv.com", "sakina.furniturewala@analyticsliv.com"],
      subject: 'New Registartion for Looker studio webinar.',
      html: `Enquiry Submitted by <br> Full Name - ${req.body.fullName}  <br> Email- ${req.body.email} <br> Contact - ${req.body.contact} <br> Website - ${req.body.company} <br> Profession - ${req.body.profession} <br> Type - ${req.body.type} `
    };


    var userMailOptions = {
      from: "sales@analyticsliv.com",
      to: [req.body.email],
      subject: 'You’re In! 🎉 Data Storytelling Webinar Confirmation',
      html: generateLookerEmailTemplate(req.body.fullName)
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
