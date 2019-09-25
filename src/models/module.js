module.exports = (sequelize, DataTypes) => {
  const Module = sequelize.define('Module', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    moduleName: {
      field: 'module_name',
      type: DataTypes.STRING,
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
    tableName: 'modules'
  })

  return Module
}