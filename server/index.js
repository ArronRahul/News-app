const  express= require("express")
const  cors= require("cors")
const  mongoose= require("mongoose")

const userroute =require('./route/signup.route')

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', userroute)


const PORT =  3001;

mongoose.connect('mongodb://127.0.0.1:27017/login_signup')

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})