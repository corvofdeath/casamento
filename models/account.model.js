import mongoose from 'mongoose';
import { genSalt, hash as _hash, compare } from 'bcrypt-nodejs';

import { roles } from '../utils/types';

let accountSchema = new mongoose.Schema({
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
    role: {
        type: String,
        required: true,
        default: roles.client
    }
});

// Execute before each account.save() call
accountSchema.pre('save', function (callback) {
    let account = this;

    // Break out if the password hasn't changed
    if (!account.isModified('password')) return callback();

    // Password changed so we need to hash it
    genSalt(5, (err, salt) => {
        if (err) return callback(err);

        _hash(account.password, salt, null, (err, hash) => {
            if (err) return callback(err);
            account.password = hash;
            callback();
        });
    });
});

accountSchema.methods.verifyPassword = (password, hash) => {
    return new Promise((resolve, reject) => {
        compare(password, hash, (err, isMatch) => {
            if (err) reject(new Error(err));

            resolve(isMatch);
        })
    })
}

export default mongoose.model('accounts', accountSchema);