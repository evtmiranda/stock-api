const webGatewayService = require('../services/webGatewayService')

module.exports = {
    async getPermissions(_req, res) {
        try {
            const permissions = await webGatewayService.getPermissions();

            return res.json(permissions);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    async getProfilesAndPermissions(_req, res) {
        try {
            const profileAndPermissions = await webGatewayService.getProfileAndPermissions();

            return res.json(profileAndPermissions);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}