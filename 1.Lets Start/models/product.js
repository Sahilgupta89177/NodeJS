const { default: mongoose } = require("mongoose");
const mongoos =require("mongoose");

const product_schema =new mongoose.Schema(
    {
        username:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        contactNumber:{
            type:Number,
            default:1000000000
        },
        createdBy:{
            type:Date,
            default:Date.now
        },
        role:{
            type:String,
            enum:{
                values:[ "Student","Teacher","Developer"],
                message:"{VALUE} is not supported"
            }
        }
    }
)

module.exports =mongoos.model("User",product_schema);  