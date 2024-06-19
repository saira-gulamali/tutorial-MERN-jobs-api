const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  console.log(req.body);
  // how to check if email has already been registered in controller
  // const { email } = req.body;

  // const userEmail = await User.findOne({ email });
  // if (userEmail)
  //   return res.status(400).json({ msg: "User already registered." });

  // how to check for empty values in controller
  // this is helpful to provide meaningful error messages
  // if (!name || !email || !password) {
  //   throw new BadRequestError("Please provide name, email and password");
  // }

  // the following code has been moved to User Model
  // const salt = await bcrypt.genSalt(10);
  // const hashedPassword = await bcrypt.hash(password, salt);
  // const tempUser = { name, email, password: hashedPassword };

  // we are using mongoose validators to check for required fields
  const user = await User.create({ ...req.body });

  // controller method to generate JWT token
  // const token = jwt.sign(
  //   { userId: user._id, name: user.name },
  //   process.env.JWT_SECRET,
  //   { expiresIn: "30d" }
  // );

  // schema instance method to generate JWT token
  const token = user.createJWT();

  res
    .status(StatusCodes.CREATED)
    .json({ user: { name: user.name, userId: user._id }, token });

  // example - using instance method
  // res
  //   .status(StatusCodes.CREATED)
  //   .json({ user: { name: user.getName(), userId: user._id }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const user = await User.findOne({ email });

  if (!user) {
    throw new UnauthenticatedError("Invalid credentials");
  }
  // compare password
  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid credentials");
  }

  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
};

module.exports = {
  register,
  login,
};
