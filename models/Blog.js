const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    coverPhoto: [{
        url : {type: String, required: true}
    }],
    title: {type: String, required: true},
    content: [{
        html : {type: String, required: true}
    }],
    slug: {type: String, required: true},
    author: {type: String, required: true},
    readingTime: {type: String, required: true, default:"5 minutes read"},
    excerpt: {type: String, required: true},
    publishDate:{type: String, required: true},
    category:{type: String, required: true}
});
mongoose.models = {};
export default mongoose.model("Blog", BlogSchema);