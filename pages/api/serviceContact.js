// pages/api/service-contact.js
import ServiceContact from "../../models/ServiceContact";
import connectDb from "../../middleware/mongoose";
import { sendEmail } from "../../utils/sendMail";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        try {
            const {
                fullName,
                email,
                company,
                pageSource,
                ...additionalFields
            } = req.body;

            // Validate required fields
            if (!fullName || !email || !pageSource) {
                return res.status(400).json({
                    error: "Missing required fields: fullName, email, and pageSource are required"
                });
            }

            // Create new service contact
            const serviceContact = new ServiceContact({
                fullName,
                email,
                pageSource
            });

            // Add company if provided
            if (company) {
                serviceContact.company = company;
            }

            // Add all additional fields dynamically
            Object.keys(additionalFields).forEach(key => {
                if (additionalFields[key] !== undefined && additionalFields[key] !== '') {
                    // Store as direct property (due to strict: false)
                    serviceContact[key] = additionalFields[key];

                    // Also store in additionalFields Map for structured querying
                    serviceContact.setAdditionalField(key, additionalFields[key]);
                }
            });

            // Save to database
            await serviceContact.save();

            // Prepare email content with dynamic fields
            const formatAdditionalFields = () => {
                let additionalFieldsHtml = '';
                Object.keys(additionalFields).forEach(key => {
                    if (additionalFields[key] !== undefined && additionalFields[key] !== '') {
                        const fieldLabel = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
                        additionalFieldsHtml += `<br>${fieldLabel} - ${additionalFields[key]}`;
                    }
                });
                return additionalFieldsHtml;
            };

            // Service page mapping for better email context
            const servicePageNames = {
                'web-development': 'Web Development',
                'mobile-app-development': 'Mobile App Development',
                'digital-marketing': 'Digital Marketing',
                'seo-services': 'SEO Services',
                'cloud-consulting': 'Cloud Consulting',
                'data-analytics': 'Data Analytics',
                'ai-ml-services': 'AI/ML Services',
                'e-commerce-solutions': 'E-commerce Solutions'
            };

            const serviceName = servicePageNames[pageSource] || pageSource.charAt(0).toUpperCase() + pageSource.slice(1).replace(/-/g, ' ');

            // Internal team email notification
            const internalMailOptions = {
                to: [
                    "atul.verma@analyticsliv.com",
                    "pruthvirajsinh.rathod@analyticsliv.com"
                    // "sales@analyticsliv.com",
                    // "anuj@analyticsliv.com",
                    // "nitya@analyticsliv.com",
                    // "rajvi@analyticsliv.com",
                    // "anshul.d@analyticsliv.com"
                ],
                subject: `New ${serviceName} Enquiry - ${fullName}`,
                html: `
          <h3>New ${serviceName} Enquiry Received!</h3>
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <p><strong>Service Page:</strong> ${serviceName}</p>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${formatAdditionalFields()}
            <br><br>
            <p><em>Submitted at:</em> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
          </div>
        `
            };

            // User acknowledgment email
            const userMailOptions = {
                to: [email, "pruthvirajsinh.rathod@analyticsliv.com"],
                // to: [email, "anuj@analyticsliv.com"],
                subject: `AnalyticsLiv - Thank you for your ${serviceName} inquiry`,
                html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h3>Hi ${fullName},</h3>
            <p>Thank you for reaching out to <strong>AnalyticsLiv</strong> regarding our ${serviceName} services!</p>
            
            <p>We are one of the fastest growing Google Marketing Platform Partners in India. Our services have empowered more than <strong>500 businesses</strong> to use first-party data for analysis and marketing purposes, making businesses independent of third-party data intelligence.</p>
            
            <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #007bff; margin: 20px 0;">
              <h4>What's Next?</h4>
              <p>✅ We will study the details you have shared<br>
              ✅ Our ${serviceName} specialist will review your requirements<br>
              ✅ We'll get back to you within 24 hours with a tailored response</p>
            </div>
            
            <p>Meanwhile, you can explore our services on <a href="https://analyticsliv.com" style="color: #007bff;">analyticsliv.com</a></p>
            
            <div style="background-color: #e9ecef; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <h4>Need immediate assistance?</h4>
              <p><strong>Mobile:</strong> <a href="tel:+918320576622" style="color: #007bff;">+91 83205 76622</a><br>
              <strong>Email:</strong> <a href="mailto:support@analyticsliv.com" style="color: #007bff;">support@analyticsliv.com</a></p>
            </div>
            
            <p>Best regards,<br>
            <strong>Team AnalyticsLiv</strong></p>
            
            <hr style="margin: 20px 0; border: 1px solid #dee2e6;">
            <p style="font-size: 12px; color: #6c757d;">
              Service: ${serviceName}<br>
              Inquiry Date: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
            </p>
          </div>
        `
            };

            // Send emails
            await Promise.all([
                sendEmail(
                    internalMailOptions.to,
                    internalMailOptions.subject,
                    internalMailOptions.html,
                    'support@analyticsliv.com'
                ),
                sendEmail(
                    userMailOptions.to,
                    userMailOptions.subject,
                    userMailOptions.html,
                    'sales@analyticsliv.com'
                )
            ]);

            // Success response with contact ID for reference
            res.status(200).json({
                message: "Contact saved and emails sent successfully",
                contactId: serviceContact._id,
                service: serviceName
            });

        } catch (error) {
            console.error('Contact API Error:', error);

            // More specific error handling
            if (error.name === 'ValidationError') {
                return res.status(400).json({
                    error: "Validation Error",
                    details: Object.values(error.errors).map(e => e.message)
                });
            }

            if (error.code === 11000) {
                return res.status(400).json({
                    error: "Email already exists in our system"
                });
            }

            res.status(500).json({
                error: "Internal Server Error",
                message: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
            });
        }
    } else {
        res.status(405).json({ error: "Method Not Allowed. Use POST method." });
    }
};

export default connectDb(handler);
