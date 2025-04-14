const mongoose = require('mongoose');

const NavbarleadSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    contact: { type: String },
    url: { type: String },
    type: { type: String },
    timestamp: { type: Date, default: Date.now }
});

mongoose.models = {};
export default mongoose.model("Navbarlead", NavbarleadSchema);