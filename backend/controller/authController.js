import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from '../models/User.js';

export const signup = async (req,res)=>{
    try {
        console.log("Signup request body:", req.body);
    
        const { name, email, password} = req.body;
        //check if user already exists
        const user = await User.findOne({ email });
        if(user){
            return res.status(409)
                    .json({message: "User Already exists",success: false});
        }
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser  = await User.create({
            name,
            email,
            password: hashedPassword,
            leetcodeId:"",
            codeforcesId:""
        }); 
        await newUser.save();
        console.log("Signup Succesful , User:",newUser);
        res.status(201)
            .json({
                message:"SignUp Succesful",
                success: true,
                user: newUser
            })
        
    } catch (error) {
        console.log("Signup failed, error", error);
        res.status(500)
            .json({
                message: "Internal Server Error in Signup Controller",
                success: false,
                error
            })
    }
};

export const login = async (req,res)=>{
    try {
        const { email,password } = req.body;
        console.log("Login Request body:",req.body);

        //step 1: check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ 
                message: "User not found" ,
                success:"false"});
        }
        console.log("in controller",user);
        //step 2: compare pw
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid Password"});
        }

        //step 3: generate token
        const token = jwt.sign(
            { email: user.email, _id:user._id},
             process.env.JWT_SECRET, 
             { expiresIn: "1h"},
        )

        console.log("Login successful from controller");
        res.status(200)
            .json({
                message: "Login Success",
                success: true,
                token,
                email,
                name : user.name
            });


    } catch (error) {
        console.log("Login error: ",error);
        res.status(500).json({ 
            message: "Server error in Login",
            error
        });
    }
};

