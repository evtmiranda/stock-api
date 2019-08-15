import { Schema, model } from 'mongoose';

const UserSchema = Schema({
    id: Number,
    name: String,
    login: String,
    password: String,
    profileId: Number
},
    {
        timestamps: true
    }
);

export default model('User', UserSchema);