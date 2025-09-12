const mongoose = require('mongoose');

const JobapplicationSchema = new mongoose.Schema({
    post: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName:{type: String, required: true},
    email:{type: String, required: true},
    contact:{type: String, required: true},
    postName:{type: String, required: true},
    linkedin:{type: String},
    experience:{type: String, required: true},
    resume:{type: String, required: true},
    noticePeriod:{type: String},
    timestamp: { type: Date, default: Date.now}
});
mongoose.models = {};
export default mongoose.model("Jobapplication", JobapplicationSchema);