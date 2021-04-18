import express from 'express';
const app = express()
// const Pool = require("pg").Pool;
// const keys = require('./keys')
import { graphqlHTTP } from 'express-graphql'
import schema from './graphql/schema'

// const pool = new Pool({
//   user: keys.pgUser,
//   host: keys.pgHost,
//   database: keys.pgDatabase,
//   password: keys.pgPassword,
//   port: keys.pgPort
// });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));




app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: !(process.env.NODE_ENV == 'production')
}))

app.use('/', (req, res) => {
  res.send("Hello")
})

// app.get("/", (req, res) => {
//   const users = pool
//     .query(`SELECT * FROM users`)
//     .then((data: any) => {
//         res.json(data.rows)
//     }).catch((err: any) => {
//       throw err  
//     })
  
// });
 

app.listen(3000, () => {
    console.log("Server running on port 3000")
})