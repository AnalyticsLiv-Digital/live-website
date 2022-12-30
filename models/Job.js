const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    id: {type: String, required: true},
    title: {type: String, required: true},
    description:{type: String, required: true},
    brief:{type: String, required: true},
    location:{type: String, required: true},
    experience:{type: String, required: true}
});
mongoose.models = {};
export default mongoose.model("Job", JobSchema);