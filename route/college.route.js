const{createcollege,getcollege,updatecollege,deletecollege}=require("../controll/college.controll")
const collegeRouter=require("express")
const router=collegeRouter()
 
router.post("/createcollege",createcollege)
router.get("/getcollege",getcollege)
router.delete("/deletecollege",deletecollege)
router.put("/updatecollege",updatecollege)
module.exports=router