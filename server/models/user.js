import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email: { type: String, lowercase: true, unique: true },
    password: String
});

export default mongoose.model('user', userSchema);
