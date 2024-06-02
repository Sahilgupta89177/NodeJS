const express=require("express")

const router=express.Router();

const {getData,getTestData, getpostdata} =require("../controller/product")


router.route("/").get(getData);
router.route("/testData").get(getTestData);
router.route("/post").post(getpostdata);
module.exports=router;