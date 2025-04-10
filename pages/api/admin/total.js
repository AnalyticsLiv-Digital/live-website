import Blog from "../../../models/Blog";
import Casestudy from "../../../models/Casestudy";
import Job from "../../../models/Job";
import Contact from "../../../models/Contact";
import Dv360contact from "../../../models/Dv360contact";
import Ga4contact from "../../../models/Ga4contact";
import Gtmcontact from "../../../models/Gtmcontact";
import Jobapplication from "../../../models/Jobapplication";
import Ecommercecontact from "../../../models/Ecommercecontact";
import connectDb from "../../../middleware/mongoose";
import ChatBotLead from "../../../models/ChatBotLead";
import PopupContact from "../../../models/PopupContact";
import YtPlaylist from "../../../models/YtPlaylist";

const handler = async (req, res) => {

    let blogs = await Blog.find().count();
    let casestudies = await Casestudy.find().count();
    let jobs = await Job.find().count();
    let jobapplications = await Jobapplication.find().count();

    let contacts = await Contact.find().count();
    let dv360contacts = await Dv360contact.find().count();
    let ga4contacts = await Ga4contact.find().count();
    let gtmcontacts = await Gtmcontact.find().count();
    let ecommercecontacts = await Ecommercecontact.find().count();
    let ChatBotLeads = await ChatBotLead.find().count();
    let PopupContacts = await PopupContact.find().count();
    let ytplaylist = await YtPlaylist.find().count();

    let leads = contacts + dv360contacts + ga4contacts + gtmcontacts + ecommercecontacts + ChatBotLeads + PopupContacts + ytplaylist;


    res.status(200).json({
        blog: blogs, casestudy: casestudies, job: jobs, leads: leads, jobapplications: jobapplications,
        contacts: contacts, dv360contacts: dv360contacts, ga4contacts: ga4contacts, gtmcontacts: gtmcontacts, ecommercecontacts: ecommercecontacts,
        ChatBotLeads: ChatBotLeads, PopupContacts:PopupContacts, ytplaylist:ytplaylist
    });

}

export default connectDb(handler);
