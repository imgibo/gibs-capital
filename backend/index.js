import http from 'http';
import express from 'express';

const PORT = 3001;
const app = express();

let savings = [
    {
        id: 1,
        amount: 100,
        name: 'Gilbert'
    },
    {
        id: 2,
        amount: 200,
        name: 'Donna'
    },
    {
        id: 3,
        amount: 300,
        name: 'Skippy'
    },
];

app.get("/", (_, res) => {
    res.send("<h1>Welcome to Gibs Capital</h1>");
});

app.get("/savings", (_, res) => {
    res.json(savings);
});

app.get("/savings/:id", (req, res) => {
    const id = Number(req.params.id);
    const amount = savings.find((amount) => amount.id === id);

    res.json(amount);
});


app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
});
