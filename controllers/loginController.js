import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.js"

const login = async (req, res) => {
    const {username, password} = req.body;
    
    try {
        const foundUser = await User.findOne({username});
        if(!foundUser) return res.status(404).json({message: "User does not exist."});

        const match = await bcrypt.compare(password, foundUser.password);
        if(!match) return res.status(400).json({message: "Invalid username or password"});

        const token = jwt.sign({id:foundUser._id, username:foundUser.username}, process.env.SECRET_TOKEN, {expiresIn: "2h"});
        res.json({token: token});
    } catch(err) {
        res.status(500).json({message: err.message});
    }
}

export default login;