import jwt from "jsonwebtoken";

export const authMiddleware = (req,res,next) => {

    try {
        //1. get token from headers
        const authHeader = req.headers.authorisation;

        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(401).json({message: "No token provided"});

        }

        const token = authHeader.split(" ")[1];
        
        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        req.user = decoded;

        next();
    } catch (error) {
        res.status(401)({message: "Invalid token"});
    }

};

