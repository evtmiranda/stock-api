module.exports = (sequelize, DataTypes) => {
  const PermissionProfile = sequelize.define('PermissionProfile', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    permissionId: {
      field: 'permission_id',
      type: DataTypes.INTEGER,
    },
    moduleId: {
      field: 'module_id',
      type: DataTypes.INTEGER,
    },
    profileId: {
      field: 'profile_id',
      type: DataTypes.INTEGER,
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE,
    },
    deletedAt: {
      field: 'deleted_at',
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    freezeTableName: true,
    tableName: 'permission_profile'
  })
  PermissionProfile.associate = function (models) {
    PermissionProfile.belongsTo(models.Permission, { foreignKey: 'permissionId', as: 'permission' });
    PermissionProfile.belongsTo(models.Module, { foreignKey: 'moduleId', as: 'module' });
    PermissionProfile.belongsTo(models.Profile, { foreignKey: 'profileId', as: 'profile' });
  };

  return PermissionProfile;
};