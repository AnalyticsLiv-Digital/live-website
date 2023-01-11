const mongoose = require('mongoose');

const CasestudySchema = new mongoose.Schema({
    id: {type: String, required: true},
    slug: {type: String, required: true},
    description:{type: String, required: true},
    title: {type: String, required: true},
    filename: {type: String, required: true},
    publishdate: {type: String, required: true},
    coverimage:{type: String, required: true},
    thumb:{type: String, required: true},
    content:[{
        heading:{type: String, required: true},
        description:{type: String, required: true}
    }],
    active:{type: Boolean, required: true, default: true},
});
mongoose.models = {};
export default mongoose.model("Casestudy", CasestudySchema);