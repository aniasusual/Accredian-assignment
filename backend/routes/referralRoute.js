import express from "express"
import { submitReferral } from "../controllers/referralController.js";

const referralRouter = express.Router();

referralRouter.post("/referral", submitReferral)

export default referralRouter;