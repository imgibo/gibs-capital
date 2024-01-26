import axios from 'axios'

const baseUrl = "http://localhost:3001/savings";

async function getSavings () {
    const res = await axios.get(baseUrl);
    return res.data;
}

async function depositAmount (depositObject) {
    const res = await axios.post(baseUrl, depositObject);
    return res.data;
}

async function withdrawAmount (withdrawObject) {
    const res = await axios.post(baseUrl, withdrawObject);
    return res.data;
}


export default {
    getSavings,
    depositAmount,
    withdrawAmount,
}