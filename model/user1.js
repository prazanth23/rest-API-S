const { Schema,  SchemaTypes, model } = require('mongoose');
const citySchema=new Schema({
    cityname:SchemaTypes.String,
    famousfood:SchemaTypes.String,
    people:SchemaTypes.Number
})
const city=model('city',citySchema);
module.exports=city