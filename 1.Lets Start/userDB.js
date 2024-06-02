const connectDB =require("./db/connect")
const dataJson = require("./user.json")
const User=require("./models/product")

URL ="mongodb+srv://sahilgupta:WoeY3wqEQ2R9na6Q@dumpdata.jkmz7iw.mongodb.net/"
start =async ()=>{
    try{
        await connectDB(URL);
        await User.create(dataJson)
        console.log("Data inserted successfully")
        
    }
    catch{
        console.log("error");
    }

}

start();