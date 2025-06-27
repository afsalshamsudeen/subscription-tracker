import { Router } from "express";

const userRouter = Router();

userRouter.get('/', (req, res) => res.send({title:"GET all users"}));
userRouter.get('/:id', (req, res) => res.send({title: "Get a user"}));
userRouter.post('/', (req, res) => res.send({title: "Create user"}));
userRouter.put('/:id', (req, res) => res.send({title: "Update currnet user"}));
userRouter.delete('/:id', (req, res) => res.send({title: "Delete a user"}));

export default userRouter;