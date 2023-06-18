const {Schema,SchemaTypes,model}=require("mongoose")
const collegeSchema=new Schema({
    collegename:SchemaTypes.String,
    location:SchemaTypes.String,
    students:SchemaTypes.Number
})
const college=model("college",collegeSchema);
module.exports=college
