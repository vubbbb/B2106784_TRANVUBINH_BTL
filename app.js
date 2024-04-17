const express = require('express')
const cors = require('cors');

const app = express();

const { createJWT, verifyToken } = require('./app/middleware/verifyToken');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// test JWT
createJWT();
var decoded = verifyToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTHVhbiIsImFnZSI6MjAsImlhdCI6MTcxMzM1OTYzNH0.trxcpkNx2r_BGMg35yqSfoobFyS5cAcqsulAswlDj-8');
console.log(decoded);


// Routes
const authRouter = require('./app/routers/auth.route');
const bookRouter = require('./app/routers/book.route'); 
const userRouter = require('./app/routers/user.route');
const orderRouter = require('./app/routers/order.route');
const cartRouter = require('./app/routers/cart.route');
const publisherRouter = require('./app/routers/publisher.route');


app.get("/", (req, res) =>{
    res.json({message: "Welcome to my bookstore."});
});


app.use("/api/auth", authRouter);
app.use("/api/book", bookRouter);
app.use("/api/user", userRouter);
app.use("/api/order", orderRouter);
app.use("api/cart", cartRouter);
app.use("/api/publisher", publisherRouter);


// middleware xử lí lỗi
app.use((error, req, res, next) => {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json({message: error.message});
    }
    console.log(error);
    res.status(500).json({ message: 'Đã xảy ra lỗi khi xử lí ở server' });
  });


module.exports = app;

