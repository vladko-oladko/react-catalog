import mongoose from 'mongoose'
import bcrypt from 'bcrypt-nodejs';

const userSchema = new mongoose.Schema({
    email: { type: String, lowercase: true, unique: true },
    password: String,
    role: { type: Number, default: 0 }
});

userSchema.pre('save', function (next) {
    const user = this;

    bcrypt.genSalt(10, (err, salt) => {
        if (err) { return next(err); }

        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) { return next(err); }

            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);

            user.password = hash;
            user.auth = { token: salt, used: 0, expires: tomorrow };
            next();
        });
    });
});

userSchema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) { return callback(err); }
        callback(null, isMatch);
    });
};

export default mongoose.model('user', userSchema);
