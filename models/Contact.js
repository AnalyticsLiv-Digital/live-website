const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName:{type: String, required: true},
    email:{type: String, required: true},
    country:{type: String, required: true},
    contact:{type: String, required: true},
    role:{type: String, required: true},
    purpose:{type: String, required: true},
    requirments:{type: String, required: true},
    company:{type: String, required: true}
});
mongoose.models = {};
export default mongoose.model("Contact", ContactSchema);