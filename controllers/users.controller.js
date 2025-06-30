import User from "../models/user.models.js";

// getting all user
export const fetchUsers = async (req, res, next) => {
    try{
        const users = await User.find();

        res.status(200).json({success:true, data:users})
    }catch(error){
        next(error)
    }
}

// get only one user by id
export const fetchUser = async (req, res,next) => {
    try{
        const user = await User.findById(req.params.id).select('-password');

        if(!user){
            const error = new Error('User not found')
            error.status(404)
            throw error;
        }
        res.status(200).json({success:true, data:user})
    }catch(error){
        res.status(404).json({message:'user not found', error:error.message})
        next()
    }
}