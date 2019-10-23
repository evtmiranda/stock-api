module.exports = (sequelize, DataTypes) => {
  const Stock = sequelize.define('Stock', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    lot: {
      field: 'lot',
      type: DataTypes.STRING(50),
    },
    description: {
      field: 'description',
      type: DataTypes.STRING(100),
    },
    reference: {
      field: 'reference',
      type: DataTypes.STRING(30),
    },
    quantity: {
      field: 'quantity',
      type: DataTypes.INTEGER,
    },
    entryDate: {
      field: 'entry_date',
      type: DataTypes.DATE,
    },
    tag: {
      field: 'tag',
      type: DataTypes.STRING(30),
    },
    store: {
      field: 'store',
      type: DataTypes.STRING(30),
    },
    unitValue: {
      field: 'unit_value',
      type: DataTypes.FLOAT,
    },
    outputDate: {
      field: 'output_date',
      type: DataTypes.DATE,
    },
    outputQuantity: {
      field: 'output_quantity',
      type: DataTypes.INTEGER,
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
    },
    paymentDate: {
      field: 'payment_date',
      type: DataTypes.DATE
    },
    paymentAmount: {
      field: 'payment_amount',
      type: DataTypes.FLOAT,
    },
    updatedAt: {
    field: 'updated_at',
    type: DataTypes.DATE
    },
    deletedAt: {
      field: 'deleted_at',
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    freezeTableName: true,
    tableName: 'stocks'
  });
  
  return Stock;
};
