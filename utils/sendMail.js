// utils/mail.js
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


export const sendEmail = async (to, subject, html, from) => {
  const combinedContent = `${to} ${subject} ${html}`;

  if (combinedContent.includes('@yop.com')) {
    console.log('Email not sent: contains @yop.com');
    return;
  }

  const emailTemplate = `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              padding: 20px;
            }
            .container {
              max-width: 600px;
              margin: auto;
              background: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            }
            .header {
              background-color: #0073e6;
              color: white;
              text-align: center;
              padding: 10px;
              font-size: 20px;
              font-weight: bold;
              border-radius: 8px 8px 0 0;
            }
            .logo-container {
              text-align: center;
              margin: 20px 0;
            }
            .logo-container img {
              max-width: 150px;
            }
            .content {
              padding: 20px;
              font-size: 14px;
              line-height: 1.5;
              color: #333;
            }
            .footer {
              text-align: center;
              font-size: 12px;
              color: #777;
              margin-top: 20px;
              padding-top: 10px;
              border-top: 1px solid #ddd;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">${subject}</div>
            <div class="logo-container">
              <img src="https://storage.googleapis.com/website-bucket-uploads/logo.png" alt="Company Logo">
            </div>
            <div class="content">
              ${html}
            </div>
            <div class="footer">
              <p>AnalyticsLiv Team</p>
              <p><a href="https://www.analyticsliv.com" style="color: #0073e6; text-decoration: none;">Visit Our Website</a></p>
            </div>
          </div>
        </body>
      </html>`;

  const msg = {
    to,
    from,
    subject,
    html: emailTemplate,
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
