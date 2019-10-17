module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,        
    },
    description: {
      field: 'description',
      types: DataTypes.STRING(50)
    },
    createdAt: {
      field: 'created_at',
      types: DataTypes.DATE,
    },
    updatedAt: {
      field: 'updated_at',
      types: DataTypes.DATE,
    },
    deletedAt: {
      field: 'deleted_at',
      types: DataTypes.DATE,
    },    
  }, {
    sequelize,
    freezeTableName: true,
    tableName: 'status'
  });
  Status.associate = function(models) {
    // associations can be defined here
  };
  return Status;
};