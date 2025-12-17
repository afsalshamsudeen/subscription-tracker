import { workFlowClient } from "../config/upstatsh.js";
import Subscription from "../models/subscription.models.js";
import { SERVER_URL } from "../config/env.js";


export const createSubscription = async (req, res, next) =>{
    try{
        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id,
        })
        
       const {workflowRunId} =  await workFlowClient.trigger({
            url: `${SERVER_URL}/api/v1/workflows/subscription/reminder`,
            body: {
                subscriptionId: subscription._id,
            },
            headers: {
                'content-type': 'application/json',
            },
            retries: 0,
        })
        res.status(201).json({success: true, data: {subscription , workflowRunId}})

    }catch(error){
        next(error);
    }
}

export const getSubscriptions = async (req, res, next) =>{
    try{
        if(req.user.id != req.params.id){
            const error = new Error("You are not authorized");
            error.status = 401;
            throw error;
        }

        const subscriptions = await Subscription.find({user: req.params.id});
        res.status(200).json({success:  true, data: subscriptions});
        

    }catch(error){
        next(error);
    }
}