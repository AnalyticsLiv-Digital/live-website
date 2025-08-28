const mongoose = require('mongoose');

const serviceContactSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Full name is required'],
        trim: true
    },

    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    },

    company: {
        type: String,
        trim: true
    },

    pageSource: {
        type: String,
        required: [true, 'Page source is required'],
        trim: true
    },

    // Dynamic fields - store any additional data as key-value pairs
    additionalFields: {
        type: Map,
        of: mongoose.Schema.Types.Mixed,
        default: new Map()
    }
}, {
    timestamps: true,
    strict: false // This allows storing fields not defined in schema
});

// Index for required fields
serviceContactSchema.index({ email: 1 });

// Method to add/update additional field
serviceContactSchema.methods.setAdditionalField = function (key, value) {
    this.additionalFields.set(key, value);
    return this;
};

// Method to get additional field
serviceContactSchema.methods.getAdditionalField = function (key) {
    return this.additionalFields.get(key);
};

// Method to remove additional field
serviceContactSchema.methods.removeAdditionalField = function (key) {
    this.additionalFields.delete(key);
    return this;
};

const ServiceContact = mongoose.model('ServiceContact', serviceContactSchema);

module.exports = ServiceContact;

