import formatDate from '../utils/formatDate.js';
import Deposit from '../models/Deposit.js';

let savings = [];

async function getSavings(_, res) {
    const savings = await Deposit.find({}).then((savings) => savings);
    return res.json(savings);
}

function getSavingsAmount(req, res) {
    const id = Number(req.params.id);
    const amount = savings.find((amount) => amount.id === id);

    res.json(amount);
}

function deleteSavings(req, res) {
    const id = Number(req.params.id);
    savings = savings.filter((amount) => amount.id !== id);

    res.status(204).end();
}

function postSavings(req, res) {
    const body = req.body;

    if (!body.amount) {
        return res.status(400).json({error: "Kindly deposit an amount"});
    } if (body.amount <= 0) {
        return res.status(400).json({error: "Kindly deposit amount greater than 0"});
    }

    const amount = new Deposit ({
        name: body.name,
        amount: body.amount,
        timestamp: formatDate(new Date()),
        isApproved: body.isApproved || 'pending',
    });

    const savedDeposit = amount.save().then((res) => res);

    return res.status(201).json(savedDeposit);
}

export default {
    getSavings,
    getSavingsAmount,
    deleteSavings,
    postSavings,
}