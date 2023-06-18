const {Schema,SchemaTypes,model}=require("mongoose")
const hotelSchema=new Schema({
    hotelname:SchemaTypes.String,
    fooditems:SchemaTypes.String,
    location:SchemaTypes.String
})
const hotel=model("hotel",hotelSchema);
module.exports=hotel