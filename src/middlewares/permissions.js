const JwtService = require('../services/jwtService')
// const moduleEnum = require('../enum/module')
// const permissionEnum = require('../enum/permission')
// const UserRepository = require('../repositories/user')
// const PermissionRepository = require('../repositories/permission')
// const PermissionProfileRepository = require('../repositories/permissionProfile')
const util = require('util')

const userHasPermission = async (req, res, next) => {
    const nonSecurePaths = [""]

    const path = req.path.replace("/api/v1/", "")
    // const moduleName = path.substring(0, (path.indexOf("/") === -1 ? path.length : path.indexOf("/")))

    if (nonSecurePaths.includes(path)) {
        return next()
    }

    if (util.isNullOrUndefined(req.headers.authorization)) {
        return res.status(401).json(
            {
                errors: [
                    {
                        message: "Oops, autenticação inválida."
                    }]
            }
        )
    }

    const authorization = req.headers.authorization.split(' ')[1]

    if (!authorization) {
        return res.status(401).json(
            {
                errors: [
                    {
                        message: "Oops, autenticação inválida."
                    }]
            }
        )
    }

    try {
        const userAuthentication = JwtService.validateToken(authorization)

        const userId = userAuthentication.userId

        if (util.isNullOrUndefined(userId)) {
            return res.status(404).json(
                {
                    errors: [
                        {
                            message: "Oops, autenticação inválida."
                        }]
                }
            )
        }

        // const permissionName = permissionEnum[req.method.toLowerCase()]
        // const moduleId = moduleEnum[moduleName]

        // if (util.isNullOrUndefined(moduleId)) {
        //     return res.status(404).json(
        //         {
        //             errors: [
        //                 {
        //                     message: "Oops, rota não encontrada."
        //                 }]
        //         }
        //     )
        // }

        // const user = await UserRepository.getById(userId)
        // const permission = await PermissionRepository.getByName(permissionName)
        // const userPermission = await PermissionProfileRepository.getProfilePermissionByModule(
        //     user.profileId,
        //     permission.id,
        //     moduleId
        // )

        // if (moduleId === moduleEnum["users"] &&
        //     permissionName === permissionEnum["get"] &&
        //     userId > 0) {
        //     return next()
        // }

        // if (!userPermission) {
        //     return res.status(401).json(
        //         {
        //             errors: [
        //                 {
        //                     message: "Oops, autenticação inválida."
        //                 }]
        //         }
        //     )
        // }

        return next()
    } catch (error) {
        return res.status(404).json(
            {
                errors: [
                    {
                        message: "Oops, autenticação inválida."
                    }]
            }
        )
    }
}

module.exports = {
    userHasPermission
}