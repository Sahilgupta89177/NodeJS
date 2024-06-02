const product_schema = require("../models/product")

const getData = async (req, res) => {
    //1
    //     const user =await product_schema.find({});
    //    res.status(200).json({user});

    //2   using request object
    //     const data=req.body;
    //     console.log({"name":data.name})
    //     const user =await product_schema.find({"username":data.name});
    //    res.status(200).json({user});

    //3 using query param
    const user = await product_schema.find(req.query);
    res.status(200).json({ user });
}

const getTestData = async (req, res) => {
    res.status(200).json("i am in getTestData")
}

const getpostdata = async (req, res) => {
    const data = req.body; // assuming you're sending JSON data in the request body
    // Logic to handle the posted data

    res.status(200).json({ message: "Data received", data: req.body });
}
module.exports = { getData, getTestData, getpostdata }