"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
// const Pool = require("pg").Pool;
// const keys = require('./keys')
var express_graphql_1 = require("express-graphql");
var schema_1 = __importDefault(require("./graphql/schema"));
// const pool = new Pool({
//   user: keys.pgUser,
//   host: keys.pgHost,
//   database: keys.pgDatabase,
//   password: keys.pgPassword,
//   port: keys.pgPort
// });
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/graphql', express_graphql_1.graphqlHTTP({
    schema: schema_1.default,
    graphiql: !(process.env.NODE_ENV == 'production')
}));
app.use('/', function (req, res) {
    res.send("Hello");
});
// app.get("/", (req, res) => {
//   const users = pool
//     .query(`SELECT * FROM users`)
//     .then((data: any) => {
//         res.json(data.rows)
//     }).catch((err: any) => {
//       throw err  
//     })
// });
app.listen(3000, function () {
    console.log("Server running on port 3000");
});
