import express from 'express';
const app = express()



app.get('/', (req, res) => {
    res.send("test 2")
})
 

app.listen(3000, () => {
    console.log("Server running on port 3000")
})