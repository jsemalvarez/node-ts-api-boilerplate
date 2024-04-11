import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  emailValidated: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: [String],
    enum: ['admin', 'user'],
    default: ['user'],
  },
});

export const UserModel = mongoose.model('User', userSchema);
