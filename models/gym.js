var mongoose           = require("mongoose");
mongoose.connect("mongodb://mangesh0712:7350649327m@ds221115.mlab.com:21115/dietplan", {useNewUrlParser:true});



//SCHEMA SETUP
var gymsSchema= new mongoose.Schema({
        name:{type:String, default:"xyz" },
        image:{type:String, default:"https://images.unsplash.com/photo-1535981767287-35259dbf7d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
        weight:{type:Number, default: 00 },
        bodyfat:{type:Number, default: 00 },
        date: {type:Date, default: Date.now },
        breakfast:{type:String, default:"Please Select" },
        lunch:{type:String, default:"Please Select" },
        snack:{type:String, default:"Please Select" },
        prework:{type:String, default:"Please Select" },
        postwork:{type:String, default:"Please Select" },
        dinner:{type:String, default:"Please Select" }
  
});
//SCHEMA MODELLING
module.exports = mongoose.model("gym", gymsSchema);