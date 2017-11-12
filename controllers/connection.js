var mysql = require('mysql');

function connectionDB(){
	this.connection = mysql.createConnection({
        host     : 'localhost',
        port 	 : '8889',
        user     : 'mauro',
        password : '',
        database : 'apparriendo'
    });

    this.connected = function(){
    	this.connection.connect();
    	return this.connection;
    }
}