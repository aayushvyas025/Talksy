const { z } = require("zod");

const userSchema = z.object({
  fullname: z
    .string({ required_error: "Fullname is required" })
    .trim()
    .min(1, "Fullname is required"),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .toLowerCase()
    .min(1, "Email is required")
    .pipe(z.email("Please provide a valid email")),

  password: z
    .string({
      required_error: "Password is required",
    })
    .trim()
    .min(6, "Password should be at least 6 characters long"),

  profilePic: z.string().default(""),
});

module.exports = userSchema; 