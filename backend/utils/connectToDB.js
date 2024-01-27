import mongoose from "mongoose";

export default function connectToDB(uri) {
    mongoose.connect(uri).then((_) => console.log("Connected to DB!"));
}