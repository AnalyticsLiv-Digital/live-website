// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Jobapplication from "../../models/Jobapplication";
import connectDb from "../../middleware/mongoose";
import { sendEmail } from "../../utils/sendMail";

const handler = async (req, res) => {
  if (req.method == 'POST') {
    let b = new Jobapplication({
      fullName: req.body.name,
      postName: req.body.role,
      // lastName: req.body.lastName,
      email: req.body.email,
      // contact: req.body.contact,
      // experience: req.body.experience,
      // noticePeriod: req.body.noticePeriod,
      // linkedin: req.body.linkedin,
      resume: req.body.resume,
      coverLetter: req.body.cover,
      post: req.body.post
    });
    await b.save();

    var internalMailOptions = {
      from: "support@analyticsliv.com",
      to: ["hr@analyticsliv.com", "aashana.pathak@analyticsliv.com", "sonali.jain@analyticsliv.com"],
      subject: 'New Job Application!!',
      html: `Application Submitted by <br> Name - ${req.body.name} <br> Email- ${req.body.email} <br> Job Title- ${req.body.role} <br> Cover Letter - ${req.body.cover} <br> Resume -<a href="https://storage.googleapis.com/website-bucket-uploads/${req.body.resume}">Link</a>`
    };

    var userMailOptions = {
      from: "hr@analyticsliv.com",
      to: [req.body.email, "aashana.pathak@analyticsliv.com"],
      subject: 'AnalyticsLiv - Thankyou for your application.',
      html: `Dear ${req.body.name},<br>
            Thank you for your interest in ${req.body.role} role. We have successfully received your details and appreciate your interest in joining Analyticsliv.
            Our team will review your application, and if your profile matches our current openings, we will reach out to you for the next steps.<br><br>
            Best regards,`
    };

    await sendEmail(internalMailOptions.to, internalMailOptions.subject, internalMailOptions.html, internalMailOptions?.from);
    await sendEmail(userMailOptions.to, userMailOptions.subject, userMailOptions.html, userMailOptions?.from);

  } else {
    res.status(400).json({ error: "Bad Request" });
  }

  let jobapplication = await Jobapplication.find();
  res.status(200).json({ jobapplication });
}


export default connectDb(handler);
