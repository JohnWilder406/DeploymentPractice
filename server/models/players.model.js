const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: [2, "Too few characters - name must have at least 3 characters"]
    },
    position: {
        type: String,
    },
    status1: {
        type: String,
        default: 'undecided'
    },
    status2: {
        type: String,
        default: 'undecided'
    },
    status3: {
        type: String,
        default: 'undecided'
    }
}, {timestamps: true});

module.exports = mongoose.model('Players', PlayerSchema);