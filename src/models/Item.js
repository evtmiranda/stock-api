const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const findOrCreate = require('mongoose-findorcreate');

const ItemSchema = mongoose.Schema({
    id: String,
    name: String,
    description: String,
    quantity: Number,
},
    {
        timestamps: true
    }
);

ItemSchema.plugin(mongooseDelete);
ItemSchema.plugin(findOrCreate);

module.exports = mongoose.model('Item', ItemSchema);
