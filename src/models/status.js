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
      type: DataTypes.STRING(50)
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
    tableName: 'status'
  });
  
  return Status;
};
