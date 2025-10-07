import connectDb from "../../middleware/mongoose";
import { sendEmail } from "../../utils/sendMail";
import DashboardLead from "../../models/DashboardLead";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let b = new DashboardLead({
            fullName: req.body.fullName,
            email: req.body.email,
            company: req.body.company,
            dashboard: req.body.dashboard
        });

        console.log("req.body.dashboard", req.body.dashboard);
        await b.save();

        var internalMailOptions = {
            from: "support@analyticsliv.com",
            to: ["sales@analyticsliv.com", "anuj@analyticsliv.com", "nitya@analyticsliv.com", "rajvi@analyticsliv.com", "pruthvirajsinh.rathod@analyticsliv.com"],
            subject: 'Dashboard Sample Unlocked!!',
            html: `<strong>${req.body.dashboard}</strong> Unlocked by <br> Full Name - ${req.body.fullName}  <br> Email- ${req.body.email} <br> Company - ${req.body.company} <br> from page <a href="https://analyticsliv.com/services/interactive-dashboards">https://analyticsliv.com/services/interactive-dashboards</a>`
        };

        await sendEmail(internalMailOptions.to, internalMailOptions.subject, internalMailOptions.html, internalMailOptions?.from);

    } else {
        res.status(400).json({ error: "Bad Request" });
    }

    let dashboard = await DashboardLead.find();
    res.status(200).json({ dashboard });
}

export default connectDb(handler);