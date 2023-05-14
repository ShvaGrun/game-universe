const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "game_universe"
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE username = '" + req.body.email + "' AND password ='" + req.body.password +"'";
    const values = [
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if (err) return res.json(err);
        if (data.length > 0) {
            return res.json("Login Successfully")
        } else {
            return res.json("No Record");
        }
    })
})

app.listen(8081, () => {
    console.log("Listening...")
})