const { Permission, User, PermissionProfile } = require('../models')

const userHasPermission = async (req, res, next) => {
    const modules = {
        stocks: 2,
        report: 5,
        users: 3,
        profiles: 4
    }

    const methods = {
        get: 'view',
        post: 'create',
        put: 'edit',
        del: 'delete'
    }

    const moduleName = req.path.substring(1, req.path.length)
    const userId = req.headers.userid
    const permissionName = methods[req.method.toLowerCase()]
    const moduleId = modules[moduleName]

    if (!userId) {
        next()
    }

    const user = await User.findOne({
        where: {
            id: userId,
            deletedAt: null
        }
    })

    const permission = await Permission.findOne({
        where: {
            name: permissionName,
            deletedAt: null
        }
    })

    const userPermission = await PermissionProfile.findOne({
        where: {
            profileId: user.profileId,
            permissionId: permission.id,
            moduleId: moduleId,
            deletedAt: null
        }
    })

    console.log(userPermission)

    if (!userPermission) {
        return res.status(401).json({ error: "user has no permission"} )
    }

    return next()
}

module.exports = {
    userHasPermission
}