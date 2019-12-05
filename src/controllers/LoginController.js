const loginService = require('../services/loginService')

module.exports = {
    async login(req, res) {
        try {
            const username = req.body.username
            const password = req.body.password

            const response = await loginService.generateUserJWT(username, password)

            if (!response) {
                return res.status(401).json({
                    errors: [
                        {
                            field: "",
                            message: "Credenciais inválidas."
                        }]
                })
            }

            return res.json(response);
        } catch (error) {
            return responseException(res, error)
        }
    },
}

const responseException = (res, error) => {
    return res.status(500).json({
        errors: [
            {
                message: "Oops, ocorreu algo inesperado."
            }]
    })
}