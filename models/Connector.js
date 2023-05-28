const mongoose = require('mongoose');

const ConnectorSchema = new mongoose.Schema({
    token: {type: String, required: true},
    expiry_date: {type: String, required: true},
    platform:{type: String, required: true}
});
mongoose.models = {};
export default mongoose.model("Connector", ConnectorSchema);