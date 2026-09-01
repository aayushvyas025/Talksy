import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profilePicture: {
      type: String,
      default:
        "https://res.cloudinary.com/ddxotnl4d/image/upload/v1788283447/aakj9odlhx0pa5kdwq9z.jpg",
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
