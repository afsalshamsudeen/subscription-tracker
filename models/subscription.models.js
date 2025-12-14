import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Subscription name required'],
        trim:true,
        minLength:2,
        maxLenght:100,
    },
    price:{
        type:Number,
        required:[true, 'Subscription price must be specified'],
        min:[0, 'price must be greater than ZERO!']
    },
    currency:{
        type:String,
        required:[true, 'must add currency'],
        enum:['INR', 'USD', 'EUR'],
        default:'INR'
    },
    frequency:{
        type:String,
        enum:['daily', 'weekly', 'monthly', 'yearly'],
        default:'monthly',
    },
    category:{
        type:String,
        required:true,
        enum:['sports', 'arts', 'entertainment', 'lifestyle', 'finance', 'technology', 'other'],

    }
    ,paymentMethod:{
        type:String,
        required:true,
        trim:true
    },
    status:{
        type:String,
        enum:['active', 'cancelled', 'expired'],
        default:'active'
    },
    startDate:{
        type:Date,
        required:true,
        validate:{
            validator:(value) => value <= new Date(),
            message:'Start date must be in past', 
        }
    },
    renewalDate:{
        type:Date,
        required:false,
        validate:{
            validator: function (value) {
                return value > this.startDate;
            },
            message: 'reneway date must be greater than start date'
        }
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
        index:true
    }


}, {timestamps:true})

subscriptionSchema.pre('save', function(next){
    if(!this.renewalDate){
        const renewalPeriods ={
            daily:1,
            weekly:7,
            monthly:28,
            yearly:365,

        }

        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate + renewalPeriods[this.frequency])
    }

    if(this.renewalDate < new Date()){
        this.status = 'expired'
    };

    next()
})

const Subscription = mongoose.model('Subscription', subscriptionSchema)

export default Subscription;