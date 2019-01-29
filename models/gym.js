var mongoose           = require("mongoose");
mongoose.connect("mongodb://localhost/dietplan");

//SCHEMA SETUP
var gymsSchema= new mongoose.Schema({
        name:{type:String, default:"cristiano"},
        image:String,
        weight:Number,
        bodyfat:Number,
        date: {type:Date, default:Date.now},
        breakfast:String,
        lunch:String,
        snack:String,
        prework:String,
        postwork:String,
        dinner:String
  
});
//SCHEMA MODELLING
module.exports = mongoose.model("gym", gymsSchema);