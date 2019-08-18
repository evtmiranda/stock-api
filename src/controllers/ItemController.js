const Item = require('../models/Item');

module.exports = {
    async getAll(_req, res) {
        try {
            const items = await Item.find({ deleted: false }).sort('-createdAt');

            return res.json(items);
        } catch (error) {
            return res.status(500).json({ error: "Internal Server Error, no items found" })
        }
    },

    async create(req, res) {
        try {
            const { name, description, quantity } = req.body;

            const item = await User.findOrCreate({
                name,
                description,
                quantity
            });

            return res.status(201).json(item);
        } catch (error) {
            return res.status(500).json({ error: "Ops! Something went wrong." })
        }
    },

    async update(req, res) {
        try {
            const id = req.params.id;
            const { name, description, quantity } = req.body;

            const item = await Item.updateOne({ _id: id }, {
                name,
                description,
                quantity
            });

            let response = { rowsUpdated: item.nModified }

            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json({ error: "Ops! Something went wrong." })
        }

    },

    async delete(req, res) {
        try {
            const id = req.params.id;
            const item = await Item.deleteById(id);

            let response = { rowsDeleted: item.nModified }

            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json({ error: "Ops! Something went wrong." })
        }

    }
}