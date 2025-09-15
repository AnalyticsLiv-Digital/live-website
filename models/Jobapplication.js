const mongoose = require('mongoose');

const JobapplicationSchema = new mongoose.Schema({
    post: { type: String },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String },
    postName: { type: String, required: true },
    linkedin: { type: String },
    experience: { type: String },
    resume: { type: String, required: true },
    noticePeriod: { type: String },
    coverLetter: { type: String },
    timestamp: { type: Date, default: Date.now }
});
mongoose.models = {};
export default mongoose.model("Jobapplication", JobapplicationSchema);