const mongoose = require('mongoose');
const DashboardLeadSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String },
    dashboard: { type: String },
    timestamp: { type: Date, default: Date.now }
})

mongoose.models = {};
export default mongoose.model("DashboardLead", DashboardLeadSchema);
