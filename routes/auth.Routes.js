import { Router } from "express";

const authRouter = Router()

authRouter.post('/sign-up', (req, res) => res.send({title:"Sign up page"}));
authRouter.post("/sign-in", (req, res) => res.send({title:"Sign in page"}));
authRouter.post("/sign-out", (req, res) => res.send({title: "Sign Out"}));


export default authRouter;