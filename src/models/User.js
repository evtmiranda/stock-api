const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const findOrCreate = require('mongoose-findorcreate');

const UserSchema = mongoose.Schema({
    id: String,
    name: String,
    login: String,
    password: String,
    profileId: Number
},
    {
        timestamps: true
    }
);

UserSchema.plugin(mongooseDelete);
UserSchema.plugin(findOrCreate);

module.exports = mongoose.model('User', UserSchema);
