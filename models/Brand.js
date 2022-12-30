const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
    brand: {type: String, required: true},
    logo: {type: String, required: true}

});
mongoose.models = {};
export default mongoose.model("Brand", BrandSchema);