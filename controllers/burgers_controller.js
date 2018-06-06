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
router.get("/api/burger/:burger_name", function(req, res){
    var colToSearch = req.params.burger_name;
    burger.selectOne
    // to be continued
})

router.put("/api/burgers/:id", function(req, res){
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