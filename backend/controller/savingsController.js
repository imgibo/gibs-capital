import generateId from '../utils/generateId.js';
import formatDate from '../utils/formatDate.js';

let savings = [];

function getSavings(_, res) {
    res.json(savings);
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

    const amount = {
        name: body.name,
        amount: body.amount,
        timestamp: formatDate(new Date()),
        isApproved: body.isApproved || 'pending',
        id: generateId(savings),
    };

    savings = savings.concat(amount);

    res.status(201).json(amount);
}

export default {
    getSavings,
    getSavingsAmount,
    deleteSavings,
    postSavings,
}