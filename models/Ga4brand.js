const mongoose = require('mongoose');

const Ga4brandSchema = new mongoose.Schema({
    brand: {type: String, required: true},
    logo: {type: String, required: true},
    active:{type: Boolean, required: true}

});
mongoose.models = {};
export default mongoose.model("Ga4brand", Ga4brandSchema);