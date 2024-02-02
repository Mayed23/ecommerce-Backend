import { Schema, model } from "mongoose";


const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    age: Number,
    password: String,
    cartId: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "carts",
        },
      ],
      default: [],
    },
    role: {
      type: String,
      enum: ["user", "premium", "admin"],
      default: "user",
    },
    documents: [
      {
        name: {
          type: String,
          default: "",
        },
        reference: {
          type: String,
          default: "",
        },
      },
    ],
    lastConnection: String,
});
  


const userModel = model("user", userSchema);
export { userModel };
