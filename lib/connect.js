'use strict';

let express = require('express');
let mysql = require('mysql');
let app = express();

module.exports = {
	mysqlConnection: function() {
		let connection = mysql.createConnection({
		    host: '35.224.96.242',
		    user: 'root',
		    password: 'root',
		    database: 'cloudmine_data'
		});

		connection.connect(function(err) {
		    if (err) {
		        console.log('error connecting: ' + err);
		        return;
		    }

		    console.log('connected as id ' + connection.threadId);
		});

		return connection;
	}
};

function mysqlConnectionFunc() {

		let connection = mysql.createConnection({
		    host: '35.224.96.242',
		    user: 'root',
		    password: 'root',
		    database: 'cloudmine_data'
		});

		connection.connect(function(err) {
		    if (err) {
		        console.log('error connecting: ' + err);
		        return;
		    }

		    console.log('connected as id ' + connection.threadId);
		});

		return connection;

		//return mysqltorest(app, connection);
		//reply("connecting...");
	}