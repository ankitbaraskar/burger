var connection = require('./connection');

var orm = {

    selectAll: function(tableName){
        let queryString = "SELECT * FROM ??";
        connection.query(queryString,[tableName],(error,results)=>{
            if (error) throw error;
            return results;
        })
    },
    insertOne: function(tableName,burgerName){
        let queryString = "INSERT INTO ??(burger_name) values(?)";
        connection.query(queryString,[tableName,burgerName],(error,results)=>{
            if (error) throw error;
            return results;
        })
    },
    updateOne: function(){}
}

module.exports = orm;