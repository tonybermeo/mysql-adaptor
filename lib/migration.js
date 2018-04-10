'use strict';

let connect = require('./connect');
let cm = require('cloudmine');

let ws = new cm.WebService({
    "appid": "f1e33abb7e084dfa8f8db4ae27e8c793",
    "apikey": "fcffc3cff273489383c8d54630437096"
});

module.exports = function(req, reply){

    let connection = connect.mysqlConnection();

    let input = req.payload.request.body;
    let tableName = input.table;


    connection.query("SELECT * FROM " + tableName, function (err, rows) {
        if (err) throw err;

        for (var i = 0; i < rows.length; i++) {

        		let jsonArray = rows;
                let json = jsonArray[i];

        	ws.set('', {'table':tableName,'info':json}).on('success', function(data, res) {

                });
        }
        reply("migration completed");
    });
};


