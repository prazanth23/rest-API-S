const ram =require("../model/user")
//create
module.exports.create=(req,res)=>{
    const {productname,productprice}=req.query
     ram.create({
        productname,
        productprice
     }).then(()=>{   
    res.json({
        message:"created successfully"
    })
}).catch(err=>{
        console.log("error",err.message);
        res.json({
            success:false
        })
    })
}
//read
module.exports.getproduct = (req, res) => {
    ram.find().then(allUsers=>{
        res.json({
            data: allUsers
        })
    }).catch(err=>{
        res.json({
            success: false,
            message: err.message
        })
    })  
}
//delete
module.exports.deleteproduct = (req, res) => {
    ram.deleteOne({productname:"jam"}).then(del=>{
        res.json({
            message:"deleted successfully"
        })
    }).catch(err=>{
        res.json({
            success: false,
            message: err.message
        })
    })  
}
//update
module.exports.patchproduct = (req, res) => {
    ram.findOneAndUpdate({productname:"cake"},{productname:"jam"}).then(del=>{
        res.json({
            message:"updated sucessfully"
        })
    }).catch(err=>{
        res.json({
            success: false,
            message: err.message
        })
    })  
}


