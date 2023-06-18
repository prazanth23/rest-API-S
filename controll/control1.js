const city =require("../model/user1")
//create
module.exports.createcity=(req,res)=>{
    const {cityname,famousfood,people}=req.query
     city.create({
       cityname,
       famousfood,
       people
     }) .then(()=>{  
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
module.exports.getcity = (req, res) => {
    city.find().then(allcity=>{
        res.json({
            data: allcity
        })
    }).catch(err=>{
        res.json({
            success: false,
            message: err.message
        })
    })  
}
//delete
module.exports.deletecity= (req, res) => {
    city.deleteOne({cityname:req.query.cityname}).then(del=>{
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
module.exports.patchcity = (req, res) => {
    city.findOneAndUpdate({cityname:"chennai"},{cityname:"dindigul"}).then(del=>{
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
