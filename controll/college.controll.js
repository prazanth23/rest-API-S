const college=require("../model/college.user")
//create
module.exports.createcollege=(req,res)=>{
    const{collegename,location, students}=req.query
    college.create({
        collegename,
        location,
        students
    }).then(()=>{
    res.json({
        message:"created successfully"
    })
}).catch(err=>{
        console.log("not created",err.message);
        res.json({
            success:false
        })
    })
}
//get
module.exports.getcollege=(req,res)=>{
    college.find().then(allcollege=>{
        res.json({
           data:allcollege
           
        })
    }).catch(err=>{
        res.json({
            message:"not find college"
        })
    })
}

//delete
module.exports.deletecollege=(req,res)=>{
    college.deleteOne({collegename:req.query.collegename}).then(del=>{
        res.json({
            message:"deleted successfully"
        })
    }).catch(err=>{
        res.json({
            message:"not deleted successfully"
        })
    })
}

//update


module.exports.updatecollege=(req,res)=>{
    college.findOneAndUpdate({collegename:req.query.collegename,
        location:req.query.location,
        students:req.query.students},{
            collegename:req.query.collegename1,
            location:req.query.location1,
            students:req.query.students1
        }).then(del=>{
        res.json({
            message:"updated successfully"
        })
    }).catch(err=>{
        res.json({
            message:"not update successfully"
        })
    })
}