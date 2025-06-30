import { Router } from "express";
import { fetchUser, fetchUsers } from "../controllers/users.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get('/', fetchUsers);
userRouter.get('/:id', authorize,fetchUser);
userRouter.post('/', (req, res) => res.send({title: "Create user"}));
userRouter.put('/:id', (req, res) => res.send({title: "Update currnet user"}));
userRouter.delete('/:id', (req, res) => res.send({title: "Delete a user"}));

export default userRouter;