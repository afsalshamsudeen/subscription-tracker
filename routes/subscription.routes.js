import { Router } from "express";

const subRouter = Router();

subRouter.get('/', (req, res) => res.send({title:"GET all subscribers"}));

subRouter.get('/:id', (req, res) => res.send({title:"GET all subscribers"}));

subRouter.post('/', (req, res) => res.send({title: "CREATE subscription"}));

subRouter.put('/:id', (req, res) => res.send({title:"UPDATE subscription"}));

subRouter.get('/user/:id', (req, res) => res.send({title: "GET user by id"}));

subRouter.put('/:id/cancel', (req, res) => res.send({title: "CANCEL subscriprion"}));

subRouter.get('/upcoming-renewals', (req, res) => res.send({title: "Cancel coming renewals"}));


export default subRouter;