const mongoose = require('mongoose');

const ProposalSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    proposals: [
        {
            name: { type: String, required: true },
            proposal: { type: String, required: true },
            createdAt: { type: Date, default: Date.now }
        }
    ]
}, { timestamps: true });

mongoose.models = {};
export default mongoose.model("Proposal", ProposalSchema);