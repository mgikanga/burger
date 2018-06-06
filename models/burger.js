var orm = require("../config/orm.js");
 var burger = {
     selectAll: function(cb){
         orm.selectAll("burgers", function(res){
             cb(res)
         })
     },
     selectOne: function(colToSearch, valOfCol,cb){
         orm.selectOne("burgers", colToSearch, valOfCol, function(res){
             cb(res);
         })
     },
     update: function(objColVals, condition, cb){
         orm.update("burgers", objColVals, condition, function(res){
             cb(res);
         })
     }
 }
 module.exports = burger;