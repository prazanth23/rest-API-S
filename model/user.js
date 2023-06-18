const { Schema,  SchemaTypes, model } = require('mongoose');
const productschema=new Schema({
    productname:SchemaTypes.String,
    productprice:SchemaTypes.Number
})
const ram =model('ram',productschema);
module.exports=ram