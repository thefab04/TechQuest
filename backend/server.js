const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/user.js');
const user = require('./models/user.js');

dotenv.config();
const app=express();

app.use(express.json());
app.use(cors());


// connectig mongoDB heereee

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB connecteddd"))
.catch((err) => console.log(err));


//signup process route 

app.post("/api/auth.signup",async(req,res) => {
    try{
        const { emailOrMobile,password} = req.body;

        const existingUser = await User.findOne({emailOrMobile});
        if(existingUser){
            return res.status(400).json({message:"User already exists!!"});
        }

        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new User({emailOrMobile,password:hashedPassword});
        await newUser.save();

        res.json({message:"Account created successfully!!!"});

    }
    catch(error){
        res.status(500).json({message:"Server error"});
    }

});


// login process route 

app.post('/api/auth/login',async(req,res) => {
    try{
        const {emailOrMobile,password}=req.body;

        const usere = await User.findOne({emailOrMobile});
        if(!user){
            return res.status(400).json({message:"User not found!!!"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"});
        }

        const token = jwt.sign({id:user._id},process.env,JWT_SECRET,{expires:"1h",
        });

        res.json({message:"Login successful",token});

    }

    catch(error){
        res.status(500).json({message:"Server error!!"});
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log(`Server is running on ${PORT}`));


