import mongoose from 'mongoose';
import { genSalt, hash as _hash, compare } from 'bcrypt-nodejs';

let userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    name: {
        type: String,
        required: true
    }
});

// Execute before each account.save() call
userSchema.pre('save', function (callback) {
    let user = this;

    // Break out if the password hasn't changed
    if (!user.isModified('password')) return callback();

    // Password changed so we need to hash it
    genSalt(5, (err, salt) => {
        if (err) return callback(err);

        _hash(user.password, salt, null, (err, hash) => {
            if (err) return callback(err);
            user.password = hash;
            callback();
        });
    });
});

userSchema.methods.verifyPassword = (password, hash) => {
    return new Promise((resolve, reject) => {
        compare(password, hash, (err, isMatch) => {
            if (err) reject(new Error(err));

            resolve(isMatch);
        })
    })
}

export default mongoose.model('users', userSchema);