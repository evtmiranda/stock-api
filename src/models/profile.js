module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      field: 'name',
      type: DataTypes.STRING(30),
    },
    description: {
      field: 'description',
      type: DataTypes.STRING(100),
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
    tableName: 'profiles'
  })

  Profile.associate = function (models) {
    Profile.hasMany(models.PermissionProfile, { foreignKey: 'profileId', as: 'permissions' });
  };
  
  return Profile;
};