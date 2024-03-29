const express = require('express')
const cors = require('cors');



const app = express();

app.use(cors());
app.use(express.json());

// Routes
const authRouter = require('./app/routers/auth.route');
const bookRouter = require('./app/routers/book.route');


app.get("/", (req, res) =>{
    res.json({message: "Welcome to my bookstore."});
});

app.use("/api/auth", authRouter);
app.use("/api/book", bookRouter);

module.exports = app;

