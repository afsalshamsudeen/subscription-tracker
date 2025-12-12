import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true, 'User must enter a valid username'],
        unique:true,
        trim:true,
        minLength:[2, 'minimum 2 characters'],
        maxLength:50,
    },
    email:{
        type:String,
        require:[true, 'Enter a valid email address'],
        unique:true,
        trim:true,
        lowecase:true,
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