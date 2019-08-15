import { Schema, model } from 'mongoose';
const mongooseDelete = require('mongoose-delete');
const findOrCreate = require('mongoose-findorcreate');

const UserSchema = Schema({
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

export default model('User', UserSchema);
