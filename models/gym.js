var mongoose           = require("mongoose");
mongoose.connect("mongodb://localhost/dietplan");



//SCHEMA SETUP
var gymsSchema= new mongoose.Schema({
        name:{type:String, default:"mangesh" },
        image:{type:String, default:"https://sd.keepcalm-o-matic.co.uk/i-w600/stay-strong-you-can-do-it.jpg" },
        weight:{type:Number, default: 00 },
        bodyfat:{type:Number, default: 00 },
        date: Date,
        breakfast:{type:String, default:"xyz" },
        lunch:{type:String, default:"bbb" },
        snack:{type:String, default:"aaa" },
        prework:{type:String, default:"ccc" },
        postwork:{type:String, default:"fff" },
        dinner:{type:String, default:"jjj" }
  
});
//SCHEMA MODELLING
module.exports = mongoose.model("gym", gymsSchema);