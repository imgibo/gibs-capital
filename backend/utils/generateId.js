export default function generateId(savings) {
    const maxId = savings.length > 0 ? Math.max(...savings.map((n) => n.id)) : 0;
    return maxId + 1;
};