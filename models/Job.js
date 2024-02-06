const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    id: {type: String, required: true},
    title: {type: String, required: true},
    our_description:{type: String, required: true},
    job_short_description:{type: String, required: true},
    brief:{type: String, required: true},
    location:{type: String, required: true},
    experience:{type: String, required: true},
    notice_period:{type: Boolean},
    active:{type: Boolean, required: true},
    details:[{
        heading:{type: String, required: true},
        points:[{type: String, required: true}]
    }]
});
mongoose.models = {};
export default mongoose.model("Job", JobSchema);