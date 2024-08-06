
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
        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    signupController,
    loginController
};