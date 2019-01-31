
/// packages
var express            = require("express"),
    app                = express(),
    bodyParser         = require("body-parser"),
    mongoose           = require("mongoose"),
    methodOverride     = require("method-override"),
    gym                = require("./models/gym")
  
    



//SETING UP MONGODB
mongoose.connect("mongodb://localhost/dietplan", {useNewUrlParser:true});

app.use(express.static( 'public'));
app.use(methodOverride("_method"));

app.use(bodyParser.urlencoded({ extended: true}));


app.set("view engine", "ejs");


app.get("/",function(req , res){

 res.render("code");
 
});

app.post("/",function(req,res){
    var key = req.body.key;
    console.log(key)
    var pass = 327;
     if(key == pass){
        gym.find({},function(err,allgyms){
            if(err){
                console.log(err);
            }else{
                res.render("diets/diets",{camp:allgyms});
            }
        });
        
     }else{
        res.redirect("/");
        // console.log("error");
    }
 
})

/// CREATE NEW GYM
// gym.create({ name: "Gym area",
//              image:"https://www.t-nation.com/system/publishing/articles/10004600/original/The-10-People-That-Drive-Gym-Owners-Crazy.png?1489783039",
//              description: "this is the biggest gym in the world. five star gym"}, 
//                      function(err,newlygym){
//                          if(err){console.log(err);}
//                          else{
//                              console.log(newlygym);
//                          }
//                      })

// INDEX route - all campgrounds
app.get("/diets",function(req , res){
    gym.find({},function(err,allgyms){
        if(err){
            console.log(err);
        }else{
            res.render("diets/diets",{camp:allgyms});
        }
    });
   });

   // CREATE route
app.post("/diets",function(req,res){
   
    var name = req.body.name; if(name === ""){res.set (name = undefined);  }else{};
    var image = req.body.image; if(image === ""){res.set (image = undefined);  }else{};
    var weight = req.body.weight; if(weight === ""){res.set (weight = undefined);  }else{};
    var bodyfat = req.body.bodyfat; if(bodyfat === ""){res.set (bodyfat = undefined);  }else{};
    var date = req.body.date; if(date === ""){res.set (date = undefined);  }else{};
 
    var breakfast = req.body.breakfast; if(breakfast === ""){res.set (breakfast = undefined);  }else{};
    var lunch = req.body.lunch; if(lunch=== ""){res.set (lunch = undefined);  }else{};
    var snack = req.body.snack; if(snack === ""){res.set (snack = undefined);  }else{};
    var prework = req.body.prework ; if(prework  === ""){res.set (prework  = undefined);  }else{};
    var postwork = req.body.postwork; if(postwork === ""){res.set (postwork = undefined);  }else{};
    var dinner = req.body.dinner; if(dinner === ""){res.set (dinner = undefined);  }else{};

    var newcamp= {name:name , image:image, weight:weight , bodyfat:bodyfat, date:date, breakfast:breakfast, lunch:lunch,snack:snack,prework:prework,postwork:postwork,dinner:dinner }
    
   gym.create(newcamp,function(err,newgym){
       if(err){
           console.log(err);
       }else{
        res.redirect("/diets");
       }
   })
  })

//NEW route
app.get("/diets/new",function(req,res){
   
    res.render("diets/newdiet");
   
})

// SHOW ROUTE
app.get("/diets/:id", function(req,res){
    var id= req.params.id;
    gym.findById(id,function(err,special){
        if(err){
            console.log(err);
        }else{
            
            res.render("diets/show", {gym1:special});
        }
    })})
/// EDIT route
app.get("/diets/:id/edit",function(req,res){

    gym.findById(req.params.id,function(err,data){
        if(err){
            console.log(err);
        }else{
            res.render("diets/edit",{data:data});
        }
    })
    
})

//// UPDATE route
app.put("/diets/:id",function(req,res){
    var name = req.body.name; if(name === ""){res.set (name = undefined);  }else{};
    var image = req.body.image; if(image === ""){res.set (image = undefined);  }else{};
    var weight = req.body.weight; if(weight === ""){res.set (weight = undefined);  }else{};
    var bodyfat = req.body.bodyfat; if(bodyfat === ""){res.set (bodyfat = undefined);  }else{};
    var date = req.body.date; if(date === ""){res.set (date = undefined);  }else{};
    var breakfast = req.body.breakfast; if(breakfast === ""){res.set (breakfast = undefined);  }else{};
    var lunch = req.body.lunch; if(lunch=== ""){res.set (lunch = undefined);  }else{};
    var snack = req.body.snack; if(snack === ""){res.set (snack = undefined);  }else{};
    var prework = req.body.prework ; if(prework  === ""){res.set (prework  = undefined);  }else{};
    var postwork = req.body.postwork; if(postwork === ""){res.set (postwork = undefined);  }else{};
    var dinner = req.body.dinner; if(dinner === ""){res.set (dinner = undefined);  }else{};

    var newcamp= {name:name , image:image, weight:weight , bodyfat:bodyfat,date:date,breakfast:breakfast, lunch:lunch,snack:snack,prework:prework,postwork:postwork,dinner:dinner}
    gym.findByIdAndUpdate(req.params.id,newcamp,function(err,updated){
        if(err){
            console.log(err)
        }else{
            res.redirect("/diets/" + req.params.id)
        }
    } )})
//// DELETE Route
app.delete("/diets/:id",function(req,res){
    var id= req.params.id;
    gym.findByIdAndRemove(id,function(err){
        if(err){
            console.log(err);
        }else{
            res.redirect("/diets");
        }
    })
})



app.listen(4000,function(){
    console.log("welcome to the yelpcamp");
})