var connection = require('./connection');

var orm = {

    selectAll: function(tableName){
        let queryString = "SELECT * FROM ??";
        connection.query(queryString,[tableName],(error,results)=>{
            if (error) throw error;
            console.log(results)
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
    updateOne: function(tableName,devouredTrue,id){
        let queryString = "UPDATE ?? SET ? WHERE ?";
        let devoured = {devoured:devouredTrue};
        let idvar = {id:id};
        connection.query(queryString,[tableName,devoured,idvar],(error,results)=>{
            if (error) throw error;
            return results;
        })
    }
}
// console.log(orm.selectAll("burgers"));

module.exports = orm;