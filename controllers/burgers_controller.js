var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js")

router.get("/",function(req,res){
    burger.selectAll(function(data){
        var myBurgers = {
            burgers: data
        };
        console.log("object ",myBurgers);
        res.render("index", myBurgers);
    })
});
router.post("/api/new_burger", function(req, res){
   console.log("it is", req.body.burger)
    burger.create([
        "burger_name"
    ],
    [
        req.body.burger
       
    ], function(result){
res.render("index", result.burger_name);
    })
  
})

router.post("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;
    console.log("id" , condition);
    burger.update({
        devoured: req.body.devoured
    },
    condition, function(result){
        if(result.changedRows == 0){
            return res.status(404).end();
        }
        else{
            res.status(200).end();
        }
    }
)
})
module.exports = router;