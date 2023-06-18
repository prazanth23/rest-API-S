const {create,gettodo,deletetodo,patchtodo} = require("../controll/todo.controll")
const todoRouter=require("express")
const router = todoRouter()
router.post("/create",create)
router.get("/gettodo",gettodo)
router.delete("/deletetodo",deletetodo)
router.patch("/patch",patchtodo)
module.exports=router
