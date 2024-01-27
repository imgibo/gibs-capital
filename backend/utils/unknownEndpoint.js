export default function unknownEndpoint(_, res) {
    res.status(404).send({ error: 'unknown endpoint'});
};