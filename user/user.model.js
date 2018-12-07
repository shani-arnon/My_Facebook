const mongoose = require('mongoose');

// const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name: { type: String, required: [true, 'First name is really important'] },
    last_name: { type: String, required: true },
    date_of_birth: { type: Date, required: true },
    list_of_friends: { type: Array, required: true },
}, { timestamps: true });


const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;