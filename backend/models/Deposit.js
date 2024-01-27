import mongoose from 'mongoose'

const depositSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now,
        get: function() {
            return this._timestamp.toLocaleString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
        }
    },
});

const Deposit = mongoose.model('Deposit', depositSchema);

export default Deposit;