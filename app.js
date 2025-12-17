import express from "express";
import { PORT } from "./config/env.js";
import authRouter from "./routes/auth.Routes.js";
import userRouter from "./routes/user.routes.js";
import subRouter from "./routes/subscription.routes.js";
import connectToDatabase from "./database/monjodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";
import arcjetMiddleware from "./middlewares/arcjet.middleware.js";
import workFlowRoutes from "./routes/workflow.routes.js";


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(arcjetMiddleware)


app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/subscriptions', subRouter)
app.use('/api/v1/workflows', workFlowRoutes)

const port = PORT;
 app.use(errorMiddleware)

app.get('/', (req, res)=>{
    res.send("Subscription Tracker is up and running");
});

app.listen(port, async()=>{
    console.log(`Server is running at http://localhost:${port}`);
    
    await connectToDatabase();
});
console.log("PORT VALUE:", PORT)


export default app;