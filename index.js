'use strict';
//
// CloudMine, Inc.
// 2015
//

/**
 * Require your Snippets
 * This can be more expressive, for example, you can use `fs` to
 * read all snippets in a directory and set them to your `module.exports`.
 */
var ConnectSnippet = require('./lib/connect');
var inspectSnippet = require('./lib/inspect');
var migrationSnippet = require('./lib/migration');
var CloudMineNode = require('cloudmine-servercode');
// Require any other node module you want...

/**
 * The `module.exports` **must** be called before the server is started,
 * or the server won't be able to read in the exports.
 */
module.exports = {
	connect: ConnectSnippet,
	inspect: inspectSnippet,
	migration: migrationSnippet

};

/**
 * Start the CloudMine server.
 */
CloudMineNode.start(module, './index.js', function(err) {
  console.log('Server Started?', err);
});
