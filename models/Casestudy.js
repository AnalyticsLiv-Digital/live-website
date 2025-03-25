const mongoose = require('mongoose');

const CasestudySchema = new mongoose.Schema({
    id: {type: String, required: true},
    slug: {type: String, required: true},
    description:{type: String},
    title: {type: String, required: true},
    filename: {type: String, required: true},
    publishdate: {type: String, required: true},
    coverimage:{type: String, required: true},
    thumb:{type: String},
    content:[{
        heading:{type: String},
        description:{type: String}
    }],
    active:{type: Boolean, required: true, default: true},
    percentageBanner:{type:String},
    clientLogo:{type: String},
    clientTestimonial:{type:String},
    testimonialVedioUrl:{type:String},
    mainImage:{type:String},
    open:{type: Boolean, required: true, default: true},
});
mongoose.models = {};
export default mongoose.model("Casestudy", CasestudySchema);