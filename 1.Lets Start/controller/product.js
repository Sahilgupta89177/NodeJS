const getData=async (req,res)=>{
   res.status(200).json(" I am in realdata")
}

const getTestData =async (req,res)=>{
    res.status(200).json("i am in getTestData")
}

const getpostdata =async (req,res)=>{
    const data = req.body; // assuming you're sending JSON data in the request body
    // Logic to handle the posted data
 
    res.status(200).json({ message: "Data received",data:req.body  });
}
module.exports={getData,getTestData,getpostdata}