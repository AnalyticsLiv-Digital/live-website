function generateEmailTemplate(firstName) {
    return `
      <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Webinar Registration Confirmation</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                    line-height: 1.6;
                }
                .email-container {
                    max-width: 600px;
                    margin: 20px auto;
                    background-color: #ffffff;
                    padding: 20px;
                    border: 1px solid #dddddd;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                .email-header {
                    background-color: #02bfff;
                    color: #ffffff;
                    padding: 10px 20px;
                    text-align: center;
                }
                .email-header h1 {
                    margin: 0;
                    font-size: 24px;
                }
                .email-body {
                    padding: 20px;
                    color: #333333;
                }
                .email-body h2 {
                    color: #02bfff;;
                }
                .email-body p {
                    margin: 10px 0;
                }
                .email-footer {
                    margin-top: 20px;
                    text-align: center;
                    color: #888888;
                }
                .email-footer a {
                    color: #02bfff;;
                    text-decoration: none;
                }
                .btn {
                    display: inline-block;
                    background-color: #02bfff;;
                    color: white;
                    padding: 10px 20px;
                    margin: 20px 0;
                    text-decoration: none;
                    border-radius: 5px;
                }
                .btn:hover {
                    background-color: #45a049;
                }
                .social-links img {
                    width: 24px;
                    margin: 0 5px;
                }
                @media (max-width: 600px) {
                    .email-container {
                        padding: 10px;
                    }
                    .btn {
                        width: 100%;
                        text-align: center;
                    }
                }
            </style>
        </head>
        <body>
            <div class="email-container">
                <!-- Header -->
                <div class="email-header">
                    <h1>You're Registered for Our Exclusive Webinar</h1>
                </div>
                
                <!-- Body -->
                <div class="email-body">
                    <!-- <h2>Google Basic vs. Advanced Consent</h2> -->
                    <p>Hi ${firstName},</p>
                    <p>Welcome to the AnalyticsLiv community! <br><br> Thank you for registering for our exclusive webinar, <strong>Google Basic Consent vs. Advanced Consent: Optimising Your Data Strategy</strong> on <strong>October 15th at 9:00 PM IST</strong>.</p>
                    
                    <h3>What to Expect from This Webinar:</h3>
                    <ul>
                        <li>Insights on the difference between Basic and Advanced Consent in Google’s ecosystem.</li>
                        <li>Actionable strategies to optimize your data collection while staying compliant.</li>
                        <li>Real-world examples of how businesses are leveraging Consent Mode to maintain data accuracy.</li>
                    </ul>
                    
                    <h3>Webinar Details:</h3>
                    <p><strong>📅 Date:</strong> October 15th, 2024</p>
                    <p><strong>🕘 Time:</strong> 9:00 PM IST</p>
                    <p><strong>⏳ Duration:</strong> 60 minutes</p>
                    <p><strong>🔗 Join Link:</strong> <a href="https://zoom.us/j/98577778111" class="btn">Join the Webinar</a></p>
                    
                    <p>Don't forget to mark your calendar! A reminder will be sent with your access link closer to the event.</p>
                    
                    <h3>Got Questions?</h3>
                    <p>Reply to this email with any questions or topics you'd like covered, and we’ll address them in the webinar.</p>
                    
                    <p>Looking forward to seeing you there!</p>
                    <p>Best regards,</p>
                    <p>The AnalyticsLiv Team</p>
                    <img src="https://storage.googleapis.com/email-template-image/AnalyticsLiv.png" alt="Company logo" width="29%" >
                </div>
                
                <!-- Footer -->
                <div class="email-footer">
                    <p><a href="https://www.analyticsliv.com/">Visit Our Website</a></p>
                    <div class="social-links">
                        <a href="https://m.facebook.com/100070503960704"><img src="https://storage.googleapis.com/email-template-image/facebook_logo.png" alt="Facebook"></a>
                        <a href="https://in.linkedin.com/company/analytics-liv-digital/"><img src="https://storage.googleapis.com/email-template-image/linkdin_logo.png" alt="LinkedIn"></a>
                        <a href="https://x.com/AnalyticsLiv"><img src="https://storage.googleapis.com/email-template-image/twiter_logo.png" alt="Twitter"></a>
                        <a href="https://www.youtube.com/channel/UCSU9utLB2PDe4VcXiI5kMFw"><img src="https://storage.googleapis.com/email-template-image/youtube_Icon.png" alt="YouTube"></a>
                        <a href="https://www.instagram.com/analyticsliv_digital/"><img src="https://storage.googleapis.com/email-template-image/insta_icon.png" alt="Instagram"></a>
                    </div>
                    <p>&copy; 2024 AnalyticsLiv | All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>
    `;
};



module.exports = {generateEmailTemplate};