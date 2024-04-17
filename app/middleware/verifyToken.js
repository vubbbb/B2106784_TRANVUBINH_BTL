require('dotenv').config();
const jwt = require('jsonwebtoken');

const createJWT = () => {
  let payload = {name: 'Luan', age: 20};
  let key = process.env.JWT_SECRET;
  let token = null;
  try{
    let token = jwt.sign(payload, key);
    console.log(token);
  } catch (error) {
    console.log(error);
  }
  return token;
};

const verifyToken = (token) => {
  let key = process.env.JWT_SECRET;
  let data = null;
  try {
    let decoded = jwt.verify(token, key);
    data = decoded;
  } catch (error) {
    console.log(error);
  }
  return data;
};

module.exports = {
  createJWT, verifyToken
}