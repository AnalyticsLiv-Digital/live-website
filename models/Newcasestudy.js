const mongoose = require('mongoose');

const NewcasestudySchema = new mongoose.Schema({
    id: {type: String, required: true},
    slug: {type: String, required: true},
    description:{type: String},
    title: {type: String, required: true},
    cstitle: {type: String, required: true},
    file: {type: String, required: true},
    coverimage:{type: String, required: true},
    active:{type: String},
    open:{type: String },
    sequence:{type: String, required: true},
    categories:[{type: String, required: true}],
    background:{type: String, required: true},
    kpis:[{
        value : {type: String},
        text : {type: String}
    }],
    challenge:{
        title : {type: String},
        points:[{
        heading : {type: String},
        point : {type: String}
    }]},
    approach:{
        title : {type: String},
        points:[{
         heading : {type: String},
         point : {type: String}
    }]},
    results:{
        title : {type: String},
        points:[{
         heading : {type: String},
         point : {type: String}
    }]}
});
mongoose.models = {};
export default mongoose.model("Newcasestudy", NewcasestudySchema);