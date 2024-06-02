// // basic api
express =require("express")
const app= express();

const PORT=process.env.PORT || 3000;
const product_route =require("./routes/product.js")
const bodyParser = require("body-parser");
const connectdatabase=require("./db/connect.js")
// app.get("/",(req,res)=>{
//     res.send("Hi Its my first Api")
// })


const start =async ()=>{
    try{

        await connectdatabase()
        app.listen(PORT,()=>{
            console.log(`${PORT} Connected`)
        } )
      
   
    }
     catch(error)
    {
       console.log(error)
    }
}

start()


app.use(bodyParser.json());
app.use("/",product_route)
