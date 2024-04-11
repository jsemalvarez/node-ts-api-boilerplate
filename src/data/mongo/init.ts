import mongoose from 'mongoose';

export interface ConnectOptions {
  mongoUrl: string;
  dbName: string;
}

export const connect = async (options: ConnectOptions) => {
  try {
    await mongoose.connect(options.mongoUrl, {
      dbName: options.dbName,
    });
    console.log('DB connected');
  } catch (error) {
    console.log(error);
    throw error;
  }
};
