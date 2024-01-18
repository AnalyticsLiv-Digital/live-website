const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    coverphoto: {type: String, required: true},
    title: {type: String, required: true},
    content:{type: String},
    slug: {type: String, required: true},
    author: {type: String, required: true},
    description: {type: String, required: true},
    date:{type: String, required: true},
    thumbnail:{type: String, required: true},
    active:{type: Boolean, required: true},
    duration:{type: String, required: true},
    document_id:{type: String},
    sequence:{type: String, required: true},
    category:[
        {type: String}
        
    ],
});
mongoose.models = {};
export default mongoose.model("Blog", BlogSchema);