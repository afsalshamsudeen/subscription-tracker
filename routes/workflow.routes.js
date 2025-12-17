import { Router } from "express";
import { sendRemainders } from "../controllers/workflow.controller.js";

const workFlowRoutes = Router();

workFlowRoutes.post('/subscription/reminder', sendRemainders)

export default workFlowRoutes;