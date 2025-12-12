import { Router } from "express";
import { signIn,  signUp, signOut } from "../controllers/auth.controller.js";

const authRouter = Router()

authRouter.post('/sign-up', signUp);
authRouter.post("/sign-in", signIn);
authRouter.post("/sign-out", signOut);

// authRouter.post("/sign-out", (req,res)=>{
//     res.send({'message':'hey'});
// })
export default authRouter;