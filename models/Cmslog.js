const mongoose = require('mongoose');

const CmslogSchema = new mongoose.Schema({
    email:{type: String, required: true},
    type:{type: String},
    section:{type: String, required: true},
    changes:{type: Object, required: true},
    id:{type: String, required: true},
    timestamp: { type: Date, default: Date.now}
});
mongoose.models = {};
export default mongoose.model("Cmslog", CmslogSchema);