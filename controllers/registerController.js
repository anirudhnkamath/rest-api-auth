import User from "../models/user.js"
import bcrypt from "bcrypt"

const register = async (req, res) => {
    const {username, password} = req.body;
    
    try {
        const foundUser = await User.findOne({username});
        if(foundUser) return res.status(404).json({message: "Username not available."});

        const newUser = new User({username, password: await bcrypt.hash(password,10)});
        newUser.save();
        return res.status(201).json({message: "Registration successful. Please login"});
    } catch(err) {
        res.status(400).json({message: err.message});
    }
}

export default register;