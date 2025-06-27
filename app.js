import express from "express";

import { PORT } from "./config/env.js";
import authRouter from "./routes/auth.Routes.js";
import userRouter from "./routes/user.routes.js";
import subRouter from "./routes/subscription.routes.js";
import connectToDatabase from "./database/monjodb.js";


const app = express()

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/subscriptions', subRouter)

app.get('/', (req, res)=>{
    res.send("Helloo world");
});

app.listen(PORT, async()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
    
    await connectToDatabase();
});


export default app;