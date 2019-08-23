const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const findOrCreate = require('mongoose-findorcreate');
const mongooseFindAndFilter = require('mongoose-find-and-filter');

const UserSchema = mongoose.Schema({
    id: String,
    name: String,
    username: String,
    password: String,
    profileId: Number
},
    {
        timestamps: true
    }
);

UserSchema.plugin(mongooseDelete);
UserSchema.plugin(findOrCreate);
UserSchema.plugin(mongooseFindAndFilter);

module.exports = mongoose.model('User', UserSchema);
