import mongoose from "mongoose";

const validateEmail = function (email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const userSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: {
    type: String,
    required: true,
    set: capitalizeFirstLetter,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
    validate: {
      validator: function (v) {
        return v.includes("@");
      },
      message: 'Email address must contain "@"',
    },
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password must be at least 6 characters long"],
    validate: {
      validator: (v) => /\d/.test(v),
      message: "Password must contain at least one number",
    },
  },
  boughtTickets: { type: Array, required: false },
  moneyBalance: { type: Number, required: false, default: 1000 },
});

export default mongoose.model("User", userSchema);
