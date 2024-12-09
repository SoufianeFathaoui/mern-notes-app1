import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB Connected....`);
  } catch (err) {
    console.log(`MongoDB Error : ${err}`);
  }
};
