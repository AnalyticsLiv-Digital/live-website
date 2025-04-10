import connectDb from "../../../middleware/mongoose";
import ChatBotLead from "../../../models/ChatBotLead";
import Contact from "../../../models/Contact"
import Dv360contact from "../../../models/Dv360contact";
import Ecommercecontact from "../../../models/Ecommercecontact";
import Ga4contact from "../../../models/Ga4contact";
import Gtmcontact from "../../../models/Gtmcontact";
import PopupContact from "../../../models/PopupContact";

const handler = async (req, res) => {
    const { type } = req.query;
    let response = {};

    if (type === "contact") {
        let contact = await Contact.find({}, { firstName: 1, lastName: 2, email: 3, contact: 4, role: 5, purpose: 6, requirments: 7, company: 8, timestamp: 9 }).sort({ timestamp: -1 });
        response.contact = contact;
    }
    else if (type === "chatbot") {
        let chatbot = await ChatBotLead.find({}, { email: 1, phone: 2, option: 3, subOption: 4, timestamp: 5 }).sort({ timestamp: -1 });
        response.chatbot = chatbot;
    }
    else if (type === "dv360") {
        let dv360 = await Dv360contact.find({}, { fullName: 1, email: 2, contact: 3, message: 4, website: 5, timestamp: 6 }).sort({ timestamp: -1 });
        response.dv360 = dv360;
    }
    else if (type === "ga4") {
        let ga4 = await Ga4contact.find({}, { fullName: 1, email: 2, contact: 3, message: 4, timestamp: 6 }).sort({ timestamp: -1 });
        response.ga4 = ga4;
    }
    else if (type === "gtm") {
        let gtm = await Gtmcontact.find({}, { fullName: 1, email: 2, contact: 3, message: 4, website: 5, timestamp: 6 }).sort({ timestamp: -1 });
        response.gtm = gtm;
    }
    else if (type === "popup") {
        let popup = await PopupContact.find({}, { fullName: 1, email: 2, contact: 3, message: 4, timestamp: 6 }).sort({ timestamp: -1 });
        response.popup = popup;
    }
    else if (type === "ecommerce") {
        let ecommerce = await Ecommercecontact.find({}, { fullName: 1, email: 2, contact: 3, message: 4, website: 5, timestamp: 6 }).sort({ timestamp: -1 });
        response.ecommerce = ecommerce;
    }
    res.status(200).json(response);
}

export default connectDb(handler);