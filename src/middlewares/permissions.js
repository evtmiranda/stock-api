const JwtService = require('../services/jwtService')
const moduleEnum = require('../enum/module')
const permissionEnum = require('../enum/permission')
const UserRepository = require('../repositories/user')
const PermissionRepository = require('../repositories/permission')
const PermissionProfileRepository = require('../repositories/permissionProfile')

const userHasPermission = async (req, res, next) => {
    const nonSecurePaths = ['/login', '/web']

    if (nonSecurePaths.includes(req.path)) {
        return next()
    }

    const authorization = req.headers.authorization.split(' ')[1]
    
    if (!authorization) {
        return res.status(401).json({ error: "User must be logged in"} )
    }

    const moduleName = req.path.substring(1, req.path.length)

    const userAuthentication = JwtService.validateToken(authorization)
    const userId = userAuthentication.userId

    const permissionName = permissionEnum[req.method.toLowerCase()]
    const moduleId = moduleEnum[moduleName]

    const user = await UserRepository.getById(userId)
    const permission = await PermissionRepository.getByName(permissionName)
    const userPermission = await PermissionProfileRepository.getProfilePermissionByModule(
        user.profileId,
        permission.id,
        moduleId
    )

    if (!userPermission) {
        return res.status(401).json({ error: "User has no permission"} )
    }

    return next()
}

module.exports = {
    userHasPermission
}