const mongoose = require('mongoose');

const EcommercecontactSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    email:{type: String, required: true},
    contact:{type: String},
    message:{type: String},
    website:{type: String},
    timestamp: { type: Date, default: Date.now}
});
mongoose.models = {};
export default mongoose.model("Ecommercecontact", EcommercecontactSchema);