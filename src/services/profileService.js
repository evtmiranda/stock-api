const { Profile } = require('../models')
const getBrazilianDate = require('../utils/getBrazilianDate')
const permissionProfileService = require('../services/permissionProfileService')

const findAndFilter = async (filters) => {
    const profiles = await Profile.findAll({
        where: filters,
        order: [
            ['id', 'DESC']
        ]
    })

    return profiles;
}

const findOrCreate = async (profile) => {
    const [profileCreated, created] = await Profile.findOrCreate({
        where: {
            name: profile.name,
            deletedAt: null
        },
        defaults: {
            name: profile.name,
            description: profile.description,
            created_at: getBrazilianDate()
        }
    })

    return [profileCreated, created]
}

const findOne = async (filters) => {
    const profile = await Profile.findOne({
        where: filters,
    })

    return profile;
}

const create = async (profile) => {
    const [profileCreated, created] = await findOrCreate(profile);

    if (created) {
        const permissionProfiles = await permissionProfileService.createPermissionProfilesObjectByModuleAndPermissionsName(profile.permissions, profileCreated.id);

        await permissionProfileService.bulkCreate(permissionProfiles);
    }

    return [profileCreated, created]
}

const remove = async (id) => {
    const result = await Profile.update({
        deletedAt: new Date()
    },
        {
            where: {
                id: id
            }
        })

    return result;
}

const update = async (profileAndPermissions) => {
    const profile = {
        id: profileAndPermissions.id,
        name: profileAndPermissions.name,
        description: profileAndPermissions.description
    };


    const [numberOfAffectedRows, affectedRows] = await Profile.update({
        name: profile.name,
        description: profile.description,
    },
        {
            where: { id: profile.id },
            returning: true
        })

    const permissionProfiles = await permissionProfileService.createPermissionProfilesObjectByModuleAndPermissionsName(profileAndPermissions.permissions, profile.id);
    await permissionProfileService.bulkDelete(profile.id);
    await permissionProfileService.bulkCreate(permissionProfiles);

    return [numberOfAffectedRows, affectedRows];
}

module.exports = {
    findAndFilter,
    findOne,
    findOrCreate,
    create,
    remove,
    update
};