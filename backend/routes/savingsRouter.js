import express from "express";
import savingsController from "../controller/savingsController.js";

const savingsRouter = express.Router();

savingsRouter.get("/", savingsController.getSavings);
savingsRouter.get("/:id", savingsController.getSavingsAmount);
savingsRouter.delete("/:id", savingsController.deleteSavings);
savingsRouter.post("/", savingsController.postSavings);

export default savingsRouter;