// utils/mail.js
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


export const sendEmail = async (to, subject, html, from) => {
    const msg = {
        to,
        from,
        subject,
        html,
    };
    try {
        await sgMail.send(msg);
        console.log('Email sent to:- ', to);
    } catch (error) {
        console.error(error);
        if (error.response) {
            console.error(error.response.body);
        }
    }
};
