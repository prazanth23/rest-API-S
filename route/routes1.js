const {createcity,getcity,deletecity,patchcity} = require("../controll/control1")
const cityRouter=require("express")
const router = cityRouter()
router.post("/createcity",createcity)
router.get("/getcity",getcity)
router.delete("/deletecity",deletecity)
router.patch("/patch",patchcity)
module.exports=router
