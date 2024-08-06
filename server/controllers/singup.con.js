
const jwt=require('jsonwebtoken')
const signup=require('../model/signup')

const signupController = async (req, res) => {
    const { user, email, password } = req.body;
    console.log(user,email,password)
    if (!user || !email || !password) {
        return res.status(400).json({ message: "Please fill all the fields" });
    }

    try {
        const existingUser = await signup.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const newUser = new signup({ user, email, password });
        await newUser.save();
        console.log(newUser);
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const loginController = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password)
    if (!email || !password) {
        return res.status(400).json({ message: "Please fill all the fields" });
    }
    try {
        const existingUser = await signup.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ message: "User doesn't exist" });
        }
        if (existingUser.password !== password) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1h" });
        res.json({token})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const homeController = async (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    console.log('Token from headers:', token);

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, 'test');
        console.log('Decoded token:', decoded);
        res.json({message: "decoded",decoded})
        console.log('responded');
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }

};




module.exports = {
    signupController,
    loginController,
    homeController
};