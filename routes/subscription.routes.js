import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription, getSubscriptions } from "../controllers/subscription.controller.js";


const subRouter = Router();

subRouter.get('/', (req, res) => res.send({title:"GET all subscription"}));

subRouter.get('/:id', (req, res) => res.send({title:"GET subscription details"}));

subRouter.post('/', authorize, createSubscription);

subRouter.put('/:id', (req, res) => res.send({title:"UPDATE subscription"}));

subRouter.delete('/:id', (req, res) => res.send({title:"DELETE subscription"}));

subRouter.get('/user/:id', authorize, getSubscriptions);

subRouter.put('/:id/cancel', (req, res) => res.send({title: "CANCEL subscription"}));

subRouter.get('/upcoming-renewals', (req, res) => res.send({title: "Cancel coming renewals"}));


export default subRouter;