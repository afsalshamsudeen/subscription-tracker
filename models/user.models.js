import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true, 'User must enter a valid name'],
        unique:true,
        trim:true,
        minLength:2,
        maxLength:50,
    },
    email:{
        type:String,
        require:[true, 'Enter a valid email address'],
        unique:true,
        trim:true,
        lowecase:true,
        minLength:5,
        maxLength:255,
        match:[/\S+@\S+\.\S+/, 'please fill valid email address'],
    },
    password:{
        type:String,
        require:[true, 'User password required'],
        minLength:6,
    }
},{timestamps:true}
);


const User = mongoose.model('User', userSchema)


export default User;