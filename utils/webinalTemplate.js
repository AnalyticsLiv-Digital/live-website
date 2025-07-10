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
                
                <!-- Body -->
                <div class="email-body">
                    <!-- <h2>Google Basic vs. Advanced Consent</h2> -->
                    <p>Hi ${firstName},</p>
                    <p>Thank you for signing up to connect with AnalyticsLiv at IREC 2025!
We’re excited to meet you and explore how data, technology, and strategy can take your brand to the next level.</p>
                    
                    
                    
                    
                    <p>Until then, feel free to check out our services or drop us a line at <strong><a href="mailto:sales@analyticsliv.com">sales@analyticsliv.com</a></strong>
Let’s unlock the future of retail, together.</p>
                    
                    <h3>Got Questions?</h3>
                    <p>Reply to this email with any questions or topics you'd like covered, and we’ll address them in the meeting.</p>
                    
                    <p>Looking forward to seeing you there!</p>
                    <p>Best regards,</p>
                    <p>The AnalyticsLiv Team</p>
                    <img src="https://storage.googleapis.com/email-template-image/AnalyticsLiv.png" alt="Company logo" width="29%" >
                </div>
                
                <!-- Footer -->
                <div class="email-footer">
                    <p><a href="https://analyticsliv.com/">Visit Our Website</a></p>
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


function generateLookerEmailTemplate(firstName) {
    return `
      <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Looker Studio Mastery: You're On the Guest List!</title>
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
                    padding: 20px;
                    text-align: center;
                    border-radius: 8px 8px 0 0;
                }
                .email-header h1 {
                    margin: 0;
                    font-size: 28px;
                    font-weight: bold;
                }
                .email-header p {
                    margin: 10px 0 0 0;
                    font-size: 18px;
                    opacity: 0.9;
                }
                .email-body {
                    padding: 30px 20px;
                    color: #333333;
                }
                .email-body h2 {
                    color: #02bfff;
                    font-size: 24px;
                    margin-bottom: 20px;
                }
                .email-body h3 {
                    color: #02bfff;
                    font-size: 18px;
                    margin-top: 25px;
                    margin-bottom: 15px;
                }
                .email-body p {
                    margin: 15px 0;
                    font-size: 16px;
                }
                .webinar-details {
                    background-color: #f8f9fa;
                    padding: 20px;
                    border-radius: 8px;
                    margin: 20px 0;
                    border-left: 4px solid #02bfff;
                }
                .speakers-section {
                    background-color: #f0f8ff;
                    padding: 20px;
                    border-radius: 8px;
                    margin: 25px 0;
                }
                .speakers-title {
                    font-size: 20px;
                    font-weight: bold;
                    color: #02bfff;
                    margin-bottom: 15px;
                }
                .speaker {
                    margin: 20px 0;
                    padding: 15px;
                    background-color: #ffffff;
                    border-radius: 6px;
                    border-left: 3px solid #02bfff;
                }
                .speaker-name {
                    font-weight: bold;
                    color: #333;
                    margin-bottom: 5px;
                    font-size: 16px;
                }
                .speaker-title {
                    color: #02bfff;
                    font-weight: bold;
                    margin-bottom: 8px;
                }
                .speaker-description {
                    color: #666;
                    font-size: 14px;
                }
                .email-footer {
                    margin-top: 30px;
                    text-align: center;
                    color: #888888;
                    border-top: 1px solid #eee;
                    padding-top: 20px;
                }
                .email-footer a {
                    color: #02bfff;
                    text-decoration: none;
                }
                .btn {
                    display: inline-block;
                    background-color: #02bfff;
                    color: white !important;
                    padding: 15px 30px;
                    margin: 25px 0;
                    text-decoration: none;
                    border-radius: 8px;
                    font-weight: bold;
                    font-size: 16px;
                    transition: background-color 0.3s;
                }
                .btn:hover {
                    background-color: #0199cc;
                }
                .social-links img {
                    width: 24px;
                    margin: 0 5px;
                }
                .highlight {
                    background-color: #fff3cd;
                    padding: 15px;
                    border-radius: 5px;
                    border-left: 4px solid #ffc107;
                    margin: 20px 0;
                }
                .benefits-list {
                    background-color: #f8f9fa;
                    padding: 20px;
                    border-radius: 8px;
                    margin: 20px 0;
                    border-left: 4px solid #02bfff;
                }
                .benefits-list ul {
                    margin: 10px 0;
                    padding-left: 20px;
                }
                .benefits-list li {
                    margin: 10px 0;
                    color: #333;
                }
                @media (max-width: 600px) {
                    .email-container {
                        padding: 10px;
                        margin: 10px;
                    }
                    .email-header h1 {
                        font-size: 24px;
                    }
                    .email-header p {
                        font-size: 16px;
                    }
                    .btn {
                        width: 90%;
                        text-align: center;
                    }
                    .speaker {
                        margin: 15px 0;
                    }
                }
            </style>
        </head>
        <body>
            <div class="email-container">
                <!-- Header -->
                <div class="email-header">
                    <h1>🎉 Looker Studio Mastery: You're On the Guest List!</h1>
                    <p>Your Spot is Reserved for the Looker Studio Mastery Webinar</p>
                </div>
                
                <!-- Body -->
                <div class="email-body">
                    <p><strong>Hi ${firstName},</strong></p>
                    
                    <p>Welcome aboard! You've successfully secured your place in the upcoming <strong>Looker Studio Mastery Webinar</strong>, designed to elevate your data visualization skills and empower you with actionable insights.</p>
                    
                    <div class="webinar-details">
                        <h3>📅 Webinar Details:</h3>
                        <p><strong>Topic:</strong> Looker Studio Mastery – From Beginner to Pro</p>
                        <p><strong>Date:</strong> 24th July</p>
                        <p><strong>Time:</strong> 8:00 PM IST | 7:30 AM PST</p>
                        <p><strong>Duration:</strong> 60 minutes + Live Q&A</p>
                        <p><strong>Platform:</strong> Zoom (Access link will be shared 24 hours before)</p>
                    </div>

                    <div class="speakers-section">
                        <div class="speakers-title">🌟 Meet Your Hosts – Industry Experts</div>
                        <div class="speaker">
                            <div class="speaker-name">Abhishek Tiwari</div>
                            <div class="speaker-title">Data Storytelling & Visualization Strategist</div>
                            <div class="speaker-description">Brings clarity to complex data through intuitive dashboards.</div>
                        </div>
                        <div class="speaker">
                            <div class="speaker-name">Sakina Furniturewala</div>
                            <div class="speaker-title">Analytics & Insights Consultant</div>
                            <div class="speaker-description">Specialist in transforming raw data into powerful business decisions.</div>
                        </div>
                    </div>

                    <div class="benefits-list">
                        <h3>🚀 What You'll Gain:</h3>
                        <ul>
                            <li>A strong foundation in Looker Studio, plus hands-on advanced techniques</li>
                            <li>Build dashboards that tell powerful stories</li>
                            <li>Avoid common mistakes in data visualization</li>
                            <li>Apply Looker Studio features like filters, blending, and formatting</li>
                            <li>See real-world dashboards</li>
                            <li>Live Q&A: Get direct answers to your data challenges</li>
                        </ul>
                    </div>

                    <div class="highlight">
                        <p><strong>📆 Add to Calendar:</strong> You'll receive a calendar invite and timely reminders, so you don't miss out.</p>
                        <p><strong>🎥 Can't Attend Live?</strong> No problem. Every registrant will receive a full session recording within 24 hours.</p>
                    </div>
                    
                    <h3>❓ Got Questions or Topics in Mind?</h3>
                    <p>Reply to this email and let us know. Our speakers will tailor the session to cover what matters most to you.</p>
                    
                    <p>We can't wait to help you <strong>unlock the full potential of Looker Studio</strong> and take your data skills to the next level.</p>
                    
                    <p>See you at the webinar!</p>
                    <p><strong>Warm regards,</strong></p>
                    <p><strong>The AnalyticsLiv Team</strong></p>
                    
                    <div style="text-align: center; margin: 30px 0;">
                        <img src="https://storage.googleapis.com/email-template-image/AnalyticsLiv.png" alt="AnalyticsLiv Logo" width="29%">
                    </div>
                </div>
                
                <!-- Footer -->
                <div class="email-footer">
                    <p>Follow us for more insights and updates:</p>
                    <div class="social-links">
                        <a href="https://m.facebook.com/100070503960704"><img src="https://storage.googleapis.com/email-template-image/facebook_logo.png" alt="Facebook"></a>
                        <a href="https://in.linkedin.com/company/analytics-liv-digital/"><img src="https://storage.googleapis.com/email-template-image/linkdin_logo.png" alt="LinkedIn"></a>
                        <a href="https://x.com/AnalyticsLiv"><img src="https://storage.googleapis.com/email-template-image/twiter_logo.png" alt="Twitter"></a>
                        <a href="https://www.youtube.com/channel/UCSU9utLB2PDe4VcXiI5kMFw"><img src="https://storage.googleapis.com/email-template-image/youtube_Icon.png" alt="YouTube"></a>
                        <a href="https://www.instagram.com/analyticsliv_digital/"><img src="https://storage.googleapis.com/email-template-image/insta_icon.png" alt="Instagram"></a>
                    </div>
                    <p><a href="https://analyticsliv.com/">Visit Our Website</a> | <a href="mailto:sales@analyticsliv.com">Contact Us</a></p>
                    <p style="font-size: 12px; color: #999;">&copy; 2024 AnalyticsLiv | All rights reserved.</p>
                    <p style="font-size: 11px; color: #999;">
                        You received this email because you registered for our Looker Studio webinar. 
                        <a href="#" style="color: #999;">Unsubscribe</a>
                    </p>
                </div>
            </div>
        </body>
        </html>
    `;
}

module.exports = { generateEmailTemplate, generateLookerEmailTemplate };