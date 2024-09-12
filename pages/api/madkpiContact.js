// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import MadKpi from "../../models/MadkpiContact"; // Assuming your model is named 'MadKpi'
import connectDb from "../../middleware/mongoose";
import { sendEmail } from "../../utils/sendMail";
import NextCors from 'nextjs-cors';

const handler = async (req, res) => {
    await NextCors(req, res, {
        // Options for CORS
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        origin: '*', // Replace * with the specific domain you want to allow
        optionsSuccessStatus: 200, // For legacy browser support
    });

    if (req.method === 'POST') {
        try {
            const bodyData = req.body;

            // Make request to external service (if needed)
            //   fetch(`https://script.google.com/macros/s/AKfycbzzDNTOkygX5WJA9vcnns-fEF6L4VIKy3qE2kcBpMF7J-Rf39Ee-ilPMkiFhAv7I2EN/exec?fullname=${bodyData.fullName}&email=${bodyData.email}&contact=${bodyData.contact}&message=${bodyData.message}&website=${bodyData.website}`);

            // Create new record in MongoDB using madkpiSchema
            let newEntry = new MadKpi({
                fullName: bodyData.fullName,
                email: bodyData.email,
                contact: bodyData.contact,
                message: bodyData.message,
            });

            await newEntry.save();

            // Internal mail options
            const internalMailOptions = {
                from: "support@analyticsliv.com",
                // to: ["sales@analyticsliv.com", "atul.verma@analyticsliv.com"],
                to: ["sales@analyticsliv.com", "anshul.d@analyticsliv.com", "anuj@analyticsliv.com", "nitya@analyticsliv.com", "rajvi@analyticsliv.com"],
                subject: 'New MadKPI Enquiry!!',
                html: `Enquiry Submitted by <br> Full Name - ${bodyData.fullName}  <br> Email- ${bodyData.email} <br> Contact - ${bodyData.contact} <br> Message - ${bodyData.message} <br>`
            };

            // User mail options
            const userMailOptions = {
                from: "madkpi@analyticsliv.com",
                to: [bodyData.email],
                subject: 'Analyticsliv - Thank you for contacting us.',
                html: `Hi ${bodyData.fullName},<br>
            Thank you for reaching out to AnalyticsLiv, one of the fastest-growing Google Marketing Platform Partners in India. Our Services have empowered more than 500 businesses to use first-party data for analysis and marketing purposes, making businesses independent of third-party data intelligence.<br>
            
            We will review the details you have shared and will get back to you shortly. Meanwhile, feel free to explore our services on <a href="https://analyticsliv.com">www.analyticsliv.com </a> or for any urgent queries, contact us at: <br>
            Mobile: <a href="tel:+918320576622">+91 83205 76622</a> <br>
            Email: <a href="mailto:support@analyticsliv.com">support@analyticsliv.com</a>`
            };

            // Send internal and user email notifications
            await sendEmail(internalMailOptions.to, internalMailOptions.subject, internalMailOptions.html, internalMailOptions?.from);
            await sendEmail(userMailOptions.to, userMailOptions.subject, userMailOptions.html, userMailOptions?.from);

            // Return success response
            res.status(200).json({ message: "Enquiry submitted successfully!" });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Something went wrong!' });
        }
    } else {
        res.status(400).json({ error: "Bad Request" });
    }
};

export default connectDb(handler);
