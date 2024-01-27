import app from './app.js'

const PORT = process.env.PORT || 3001;

app.get("/", (_, res) => {
    res.send("<h1>Landing Page</h1>");
});

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
});
