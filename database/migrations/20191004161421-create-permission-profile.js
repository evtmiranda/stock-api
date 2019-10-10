module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('permission_profile', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      permission_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'permissions',
          key: 'id'
        }
      },
      module_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'modules',
          key: 'id'
        }
      },
      profile_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'profiles',
          key: 'id'
        }
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
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('permission_profile');
  }
};