// FILEPATH: /D:/PTUDWeb - Project/B2106784_TRANVUBINH_BTL/backend/test/auth.controller.test.js
const chai = require('chai');
const jwt = require('jsonwebtoken');
const { expect } = chai;
require('dotenv').config();

describe('JWT Token Generation', function() {
  it('should generate a valid JWT token', function() {
    const user = {
      _id: '1234567890',
      isAdmin: true
    };

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    // Verify the token
    const decoded = jwt.verify(accessToken, process.env.JWT_SEC);

    // Check the contents of the token
    expect(decoded.id).to.equal(user._id);
    expect(decoded.isAdmin).to.equal(user.isAdmin);
  });
});