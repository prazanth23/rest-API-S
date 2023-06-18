const hotel =require("../model/hotel.model")
//create
module.exports.createhotel=(req,res)=>{
    const {hotelname,fooditems,location}=req.query
     hotel.create({
        hotelname,
        fooditems,
        location
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

module.exports.gethotel= (req, res) => {
    hotel.find().then(allhotel=>{
        res.json(
             allhotel
        )
    }).catch(err=>{
        res.json({
            success: false,
            message: err.message
        })
    })  
}


//delete
module.exports.deletehotel= (req, res) => {
    hotel.deleteOne({hotelname:req.query.hotelname}).then(del=>{
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
module.exports.patchhotel= (req, res) => {
    hotel.findOneAndUpdate({hotel:req.query.hotel,location:req.query.location},{location:req.query.location1}).then(del=>{
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
