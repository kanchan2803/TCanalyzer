import express from 'express';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from '../models/User.js';


const router = express.Router();

router.post("/signup", async (req,res)=>{
    console.log("Signup request body:", req.body);
    const { name, email, password} = req.body;

    if (!name || !email || !password) {
            return res.status(400).json({ message: "Name, email, and password are required" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user  = await User.create({
        name,
        email,
        password: hashedPassword,
        leetcodeId:"",
        codeforcesId:""
    }); 

    res.json({message:"Sign UP succesful", user});

})

router.post("/login", async (req,res)=>{
    try {
        const {email,password} = req.body;
        console.log("Request body:",req.body);

        //step 1: check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        console.log("incontroller",user);
        //step 2: compare pw
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid Password"});
        }

        //step 3: generate token
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {
            expiresIn: "1h",
        })

        const payload = {
            token, 
            userId : user._id, 
            user : {          
                name: user.name,
                leetcodeId: user.leetcodeId || "",
                codeforcesId: user.codeforcesId || ""
            },
        }
        console.log("sending payload",payload);

        console.log("Login successful from controller");
        return res.json(payload);


    } catch (error) {
        console.log("Login error: ",error);
        res.status(500).json({ message: "Server error in Login" });
    }
})

export default router;