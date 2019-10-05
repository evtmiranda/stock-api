module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING(30),
        unique: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(8),
      },
      profile_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'profiles',
          key: 'id'
        }
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      deleted_at: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('users');
  }
};
