const mongoose = require('mongoose');

const AdminUserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    permissions: {
        type: [String],
        default: [],
        enum: ['blogs', 'casestudies', 'jobs', 'leads', 'ytplaylist', 'upwork-jobs', 'candidate-analysis']
    },
    isSuperAdmin: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Update the updatedAt timestamp before saving
AdminUserSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

mongoose.models = {};
export default mongoose.model("AdminUser", AdminUserSchema);
