"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pool = require("pg").Pool;
var keys = require('../keys');
var pool = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort
});
exports.default = pool;
