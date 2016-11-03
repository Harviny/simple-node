
var mysqlObj=require('mysql');
var dbConfig=require('./config');
var connection=mysqlObj.createConnection(dbConfig)
    connection.connect();

var getdata=function(querySql,dataCallback){

    connection.query(querySql,function(err,rows,fields){
        if(err){
           throw err;
        }
        else{
            dataCallback(rows);
        }
    })
}

module.exports.getdata=getdata;