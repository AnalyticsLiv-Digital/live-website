const mongoose = require('mongoose');

const CasestudyleadSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    email:{type: String, required: true},
    casestudy:{type: String, required: true},
    company:{type: String},
    timestamp: { type: Date, default: Date.now}
});
mongoose.models = {};
export default mongoose.model("Casestudylead", CasestudyleadSchema);