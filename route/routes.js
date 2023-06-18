const {create,getproduct,deleteproduct,patchproduct} = require("../controll/control")
const productRouter=require("express")
const router = productRouter()
router.post("/signup",create)
router.get("/getproduct",getproduct)
router.delete("/deleteproduct",deleteproduct)
router.patch("/patch",patchproduct)
module.exports=router
