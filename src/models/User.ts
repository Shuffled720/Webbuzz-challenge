// models/User.ts
import { Schema, model, models } from 'mongoose';

// Define the User schema
const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Normally, you'd hash this
});

// Check if the model is already defined to avoid redeclaration
const User = models.User || model('User', userSchema);

export default User;
