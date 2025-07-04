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
            <title>Looker Studio Webinar Registration Confirmation</title>
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
                    text-align: center;
                }
                .speakers-title {
                    font-size: 20px;
                    font-weight: bold;
                    color: #02bfff;
                    margin-bottom: 15px;
                }
                .speaker {
                    display: inline-block;
                    margin: 10px 20px;
                    text-align: center;
                }
                .speaker-name {
                    font-weight: bold;
                    color: #333;
                    margin-bottom: 5px;
                }
                .speaker-title {
                    color: #666;
                    font-style: italic;
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
                        display: block;
                        margin: 15px 0;
                    }
                }
            </style>
        </head>
        <body>
            <div class="email-container">
                <!-- Header -->
                <div class="email-header">
                    <h1>🎉 You're Registered!</h1>
                    <p>Looker Studio Mastery Webinar</p>
                </div>
                
                <!-- Body -->
                <div class="email-body">
                    <p>Hi ${firstName},</p>
                    
                    <p><strong>Congratulations!</strong> You've successfully registered for our <strong>FREE Looker Studio Webinar</strong>. We're thrilled to have you join us on this exciting journey to master data visualization and analytics!</p>
                    
                    <div class="webinar-details">
                        <h3>📅 Webinar Details:</h3>
                        <p><strong>Topic:</strong> Looker Studio Mastery - From Beginner to Pro</p>
                        <p><strong>Date:</strong> 24th july</p>
                        <p><strong>Time:</strong> 8pm IST</p>
                        <p><strong>Duration:</strong> 60 minutes + Q&A</p>
                        <p><strong>Platform:</strong> Zoom (Link will be sent 24 hours before)</p>
                    </div>

                    <div class="speakers-section">
                        <div class="speakers-title">🌟 MEET OUR EXPERT SPEAKERS</div>
                        <div class="speaker">
                            <div class="speaker-name">Abhishek Tiwari</div>
                            <div class="speaker-title">Looker Studio Expert</div>
                            <p style="font-size: 14px; margin-top: 8px;">Specializes in data storytelling and visualization techniques</p>
                        </div>
                        <div class="speaker">
                            <div class="speaker-name">Sakina Furniturewala</div>
                            <div class="speaker-title">Looker Studio Expert</div>
                            <p style="font-size: 14px; margin-top: 8px;">Focuses on analytics solutions and data-driven insights</p>
                        </div>
                    </div>

                    <h3>🚀 What You'll Learn:</h3>
                    <ul style="padding-left: 25px;">
                        <li>Master Looker Studio fundamentals and advanced features</li>
                        <li>Create stunning, interactive dashboards that tell compelling stories</li>
                        <li>Connect multiple data sources seamlessly</li>
                        <li>Best practices for data visualization and reporting</li>
                        <li>Advanced tips and tricks from industry experts</li>
                        <li>Live Q&A session with our Looker Studio specialists</li>
                    </ul>

                    <div class="highlight">
                        <strong>📱 Add to Calendar:</strong> We'll send you calendar invites and reminder emails as the webinar date approaches. Don't worry - we've got you covered!
                    </div>

                    <h3>🎁 Exclusive Bonuses:</h3>
                    <p>As a registered attendee, you'll receive:</p>
                    <ul style="padding-left: 25px;">
                        <li>📊 FREE Looker Studio templates worth $200</li>
                        <li>📚 Comprehensive webinar resource guide</li>
                        <li>🎥 Recording access for 30 days</li>
                        <li>💬 Access to our exclusive Looker Studio community</li>
                    </ul>

                    <p>Can't make it live? <strong>No worries!</strong> All registered attendees will receive the recording within 24 hours.</p>
                    
                    <h3>❓ Got Questions?</h3>
                    <p>Reply to this email with any questions or specific topics you'd like us to cover, and our experts will address them during the webinar.</p>
                    
                    <p>We're excited to help you unlock the full potential of Looker Studio and transform the way you visualize data!</p>
                    
                    <p>See you at the webinar!</p>
                    <p><strong>Best regards,</strong></p>
                    <p><strong>The AnalyticsLiv Team</strong></p>
                    
                    <div style="text-align: center; margin: 30px 0;">
                        <img src="https://storage.googleapis.com/email-template-image/AnalyticsLiv.png" alt="AnalyticsLiv Logo" width="29%">
                    </div>

                    <div style="text-align: center;">
                        <a href="[INSERT_WEBINAR_LINK]" class="btn">🔗 Access Webinar Room</a>
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
};

module.exports = { generateEmailTemplate };


module.exports = { generateEmailTemplate,generateLookerEmailTemplate };