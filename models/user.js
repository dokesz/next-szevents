import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: String,
  profilePicture: String,
  isAdmin: Boolean,
});

const User = models.User || model("User", UserSchema);

export default User;
