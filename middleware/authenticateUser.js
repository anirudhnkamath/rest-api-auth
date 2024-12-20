import jwt from "jsonwebtoken";

export default function authenticateUser(req, res, next) {
    const userToken = req.header("Authorization")?.split(' ')[1];
    if(!userToken) return res.status(401).json({message: "Accese denied. Login to proceed further."});

    try {
        jwt.verify(userToken, process.env.SECRET_TOKEN, (err, decoded) => {
            if(err) return res.status(500).json({message: err.message});
            req.user = decoded;
            next();
        })
    } catch(err) {
        res.status(401).json({ message: 'Login invalid. Please try again.' });
    }
}