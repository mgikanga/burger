// import connection.js
var connection = require("../config/connection.js");

var orm = {
    // retrieve all data
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
        console.log(result)
      });
    },
    // retrieve only one item from the database
    selectOne: function(tableInput, colToSearch, valOfCol,cb) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
          if (err) throw err;
          cb(result)
          console.log(result);
        });
      },
      //update the database
      update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    console.log(result)
          cb(result);
        });
      },
};
  module.exports = orm;
  