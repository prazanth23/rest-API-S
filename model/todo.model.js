const {Schema,SchemaTypes,model}=require("mongoose")
const todoSchema=new Schema({
    title:SchemaTypes.String,
    completed:SchemaTypes.Boolean,
    description:SchemaTypes.String
})
const todo=model("todo",todoSchema);
module.exports=todo