'use strict';

let rest = require('restler');

let connect = require('./connect');

module.exports = function(req, reply){

    let connection = connect.mysqlConnection();

    let input = req.payload.request.body;
    let tableName = input.table;

    let sqlData;

    connection.query("SELECT * FROM " + tableName, function (err, rows) {
        if (err) throw err;
        reply(rows);
    });
};


