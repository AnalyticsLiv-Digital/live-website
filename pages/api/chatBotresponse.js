// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import ChatBotLead from "../../models/ChatBotLead";
import connectDb from "../../middleware/mongoose";
import { sendEmail } from "../../utils/sendMail";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        console.log("In api achat response api",req?.body);

        let b = new ChatBotLead({
            option: req.body.option,
            subOption: req.body.subOption,
            phone: req.body.phone,
            email: req.body.email
        });
        await b.save();

        var userMailOptions = {
            from: "support@analyticsliv.com",
            to: req.body.email,
            subject: 'AnalyticsLiv - Thanks for contacting us!',
            html: `Hi,<br>
                Thank you for reaching out to AnalyticsLiv, one of the fastest growing Google Marketing Platform Partners in India. Our Services have empowered more than 500 businesses to use first-party data for analysis and marketing purposes, making businesses independent of third-party data intelligence.<br>
                We will study the details you have shared and will get back to you with a response to help your business. Meanwhile, you can have a look through our services on <a href="https://analyticsliv.com">analyticsliv.com</a> or for any quick chat, contact us at: <br>
                Mobile: <a href="tel:+918320576622">+91 83205 76622</a> <br>
                Email: <a href="mailto:support@analyticsliv.com" class="">support@analyticsliv.com</a>`
        };

        var internalMailOptions = {
            from: "support@analyticsliv.com",
            to:["atulverma1520@gmail.com"],
            // to: ["sales@analyticsliv.com", "anuj@analyticsliv.com", "nitya@analyticsliv.com", "anshul.d@analyticsliv.com", "rajvi@analyticsliv.com"],
            subject: 'ChatBot lead',
            html: `New chatbot lead by <br> Service - ${req.body?.option} <br> Sub Service -  ${req.body?.subOption} <br> Email- ${req.body?.email} <br> Contact - ${req.body?.phone}`
        };

        await sendEmail(internalMailOptions.to, internalMailOptions.subject, internalMailOptions.html, internalMailOptions?.from);
        await sendEmail(userMailOptions.to, userMailOptions.subject, userMailOptions.html, userMailOptions?.from);



    } else {
        res.status(400).json({ error: "Bad Request" });
    }

    // let ChatBotLead = await ChatBotLead.find();
    res.status(200).json({ });
}


export default connectDb(handler);