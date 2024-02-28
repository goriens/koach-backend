const crypto = require("crypto");
const catchAsyncError = require("../Middleware/catchAsyncError");
const ErrorHandler = require("../Utils/errorHandle");

exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
  });
  return res
    .status(201)
    .json({ success: true, message: "Account Created Successfully" });
});

// getAllUsers (ADMIN)
exports.getAllUsers = catchAsyncError(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({ success: true, users });
});
exports.getSingleUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(
      new ErrorHandler(`user does not exist with Id:${req.params.id}`)
    );
  }
  res.status(200).json({ success: true, user });
});
