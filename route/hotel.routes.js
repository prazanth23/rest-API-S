const{createhotel,gethotel,deletehotel,patchhotel}=require("../controll/hotel.controll")
const hotelRouter=require("express")
const router=hotelRouter()
 
router.post("/createhotel",createhotel)
router.get("/gethotel",gethotel)
router.delete("/deletehotel",deletehotel)
router.patch("/patchhotel",patchhotel)
module.exports=router