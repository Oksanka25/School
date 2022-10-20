// IMPORT JSON WEBTOKEN TO ASSIST WITH TOKEN
const jwt = require("jsonwebtoken");

// IMPORT USER TO MANIPULATE DATA ON THE DATABASE LEVEL
const User = require("./../../models/userModel");

// Define a route handler for creating users
exports.createUser = async (request, response) => {
  try {
    // Create new user
    const newUser = await User.create({
      name: request.body.name,
      email: request.body.email,
      password: request.body.password,
    });

    // Remove password from output
    newUser.password = undefined;

    // Create token
    const token = await jwt.sign(
      { id: newUser._id },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: process.env.JWT_EXPIRATION_DATE,
      }
    );

    // Send JSON RESPONSE
    response.status(201).json({
      status: "success",
      data: {
        newUser,
        token,
      },
    });
  } catch (error) {
    response.status(500).json({
      status: "error",
      error: error,
    });
  }
};
