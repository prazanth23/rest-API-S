const todo =require("../model/todo.model")
//create
module.exports.create=(req,res)=>{
    const {completed,title,description}=req.query
     todo.create({
        completed,
        title,
        description
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
module.exports.gettodo= (req, res) => {
    todo.find().then(alltodo=>{
        res.json(
             alltodo
        )
    }).catch(err=>{
        res.json({
            success: false,
            message: err.message
        })
    })  
}


//delete
module.exports.deletetodo= (req, res) => {
    todo.deleteOne({title:req.query.title}).then(del=>{
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
module.exports.patchtodo= (req, res) => {
    todo.findOneAndUpdate({title:req.query.title,completed:req.query.completed},{completed:req.query.completed1}).then(del=>{
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
