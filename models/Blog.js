const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    id : {type:String},
    coverphoto: {type: String, required: true},
    title: {type: String, required: true},
    content:{type: String},
    slug: {type: String, required: true},
    author: {type: String, required: true},
    description: {type: String, required: true},
    date:{type: String, required: true},
    thumbnail:{type: String, required: true},
    active:{type: String},
    duration:{type: String, required: true},
    document_id:{type: String},
    sequence:{type: String, required: true},
    category:[
        {type: String}
        
    ],
    relatedTo:{type: String},
    youtube:{type: String},
});
mongoose.models = {};
export default mongoose.model("Blog", BlogSchema);