module.exports = {
    async index(_req, res) {
        res.status(200).json({
            message: 'Hello'
        })
    }
} 