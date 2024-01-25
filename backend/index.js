import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const PORT = process.env.PORT || 3001;
const app = express();

morgan.token("body", function(req, res,) {
    return JSON.stringify(req.body);
});

app.use(cors());
app.use(express.json());
app.use(morgan(":method :url :status :body"));
// app.use(logger);

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

// morgan is available
// function logger(req, res, next) {
//     console.log(`Method: ${req.method}`);
//     console.log(`Path: ${req.path}`);
//     console.log(`Body: ${JSON.stringify(req.body)}`);
//     console.log('------------------------');
//     next();
// };

function unknownEndpoint(req, res) {
    res.status(404).send({ error: 'unknown endpoint'});
};

function generateId() {
    const maxId = savings.length > 0 ? Math.max(...savings.map((n) => n.id)) : 0;
    return maxId + 1;
};


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

app.delete("/savings/:id", (req, res) => {
    const id = Number(req.params.id);
    savings = savings.filter((amount) => amount.id !== id);

    res.status(204).end();
});

app.post("/savings", (req, res) => {
    const body = req.body;

    if (!body.amount) {
        return res.status(400).json({error: "Kindly deposit an amount"});
    } if (body.amount <= 0) {
        return res.status(400).json({error: "Kindly deposit amount greater than 0"});
    }

    const amount = {
        name: body.name,
        amount: body.amount,
        id: generateId(),
    };

    savings = savings.concat(amount);

    res.status(201).json(amount);
});

app.use(unknownEndpoint);

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
});
