import mongoose, { Document } from 'mongoose';
import { UserI } from '../../../interfaces';

export interface UserDocument extends UserI.User, Document {
  id: string;
}

const userSchema = new mongoose.Schema<UserDocument>(
  {
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
      enum: Object.values(UserI.UserRole),
      default: [UserI.UserRole.USER],
    },
  },
  {
    timestamps: true,
  },
);

export const UserModel = mongoose.model<UserDocument>('User', userSchema);
