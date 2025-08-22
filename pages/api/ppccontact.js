// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDb from "../../middleware/mongoose";
import { sendEmail } from "../../utils/sendMail";
import Ppccontact from "../../models/Ppccontact";

const handler = async (req, res) => {
    if (req.method == 'POST') {

        // fetch('https://script.google.com/a/macros/analyticsliv.com/s/AKfycbzK9zVbEjRBYOQL48eu8aieCPbb1bvWmDLY2GJXrKVnmi7hHLYzrdEYyqGd3zrCiYYT/exec?fullname=' + req.body.fullName + '&email=' + req.body.email + '&contact=' + req.body.contact + '&message=' + req.body.message);
        let b = new Ppccontact({
            fullName: req.body.fullName,
            email: req.body.email,
            contact: req.body.contact,
            message: req.body.message
        });
        await b.save();

        var internalMailOptions = {
            from: "support@analyticsliv.com",
            to: ["sales@analyticsliv.com", "anuj@analyticsliv.com", "nitya@analyticsliv.com", "rajvi@analyticsliv.com", "himaxi.dalwadi@analyticsliv.com"],
            subject: 'New PPC Enquiry!!',
            html: `Enquiry Submitted by <br> Full Name - ${req.body.fullName}  <br> Email- ${req.body.email} <br> Contact - ${req.body.contact} <br> Message - ${req.body.message} `
        };

        var userMailOptions = {
            from: "sales@analyticsliv.com",
            to: [req.body.email],
            subject: 'Analyticsliv - Thankyou for contacting us.',
            html: `Hi ${req.body.fullName},<br>
            Thank you for reaching out to AnalyticsLiv, one of the fastest growing Google Marketing Platform Partner in India. Our Services have empowered more than 500 businesses to use first party data for analysis and marketing purposes, making businesses independent of third party data intelligence.<br>
            
            We will study the details you have shared and will get back to you with a response to help your business. Meanwhile, you can have a look through our services on <a href="https://analyticsliv.com">analyticsliv.com </a> or for any quick chat, contact us at: <br>
            Mobile: <a href="tel:+918320576622">+91 83205 76622</a> <br>
            Email: <a href="mailto:support@analyticsliv.com" class="">support@analyticsliv.com</a>`
        };


        await sendEmail(internalMailOptions.to, internalMailOptions.subject, internalMailOptions.html, internalMailOptions?.from);
        await sendEmail(userMailOptions.to, userMailOptions.subject, userMailOptions.html, userMailOptions?.from);

    } else {
        res.status(400).json({ error: "Bad Request" });
    }
    let contact = await Ppccontact.find();
    res.status(200).json({ contact });
}


export default connectDb(handler);
