module.exports = (sequelize, DataTypes) => {
  const StockStatus = sequelize.define('StockStatus', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,        
    },
    stockId: {
      field: 'stock_id',
      type: DataTypes.INTEGER,
    },
    statusId: {
      field: 'status_id',
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
    tableName: 'stock_status'
  });
  StockStatus.associate = function(models) {
    StockStatus.belongsTo(models.Stock, { foreignKey: 'stockId', as: 'stocks' });
    StockStatus.belongsTo(models.Stock, { foreignKey: 'statusId', as: 'status' });    
  };

  return StockStatus;
};
