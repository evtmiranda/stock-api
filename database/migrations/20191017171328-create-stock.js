module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('stocks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      lot: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      reference: {
        allowNull: false,
        type: DataTypes.STRING(30),
      },
      quantity: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      entry_date: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      tag: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      store: {
        allowNull: false,
        type: DataTypes.STRING(30),
      },
      unit_value: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      output_date: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      output_quantity: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      payment_date: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      payment_amount: {
        allowNull: true,
        type: DataTypes.FLOAT,
      },
      updated_at: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      deleted_at: {
        allowNull: true,
        type: DataTypes.DATE,
      }      
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('stocks');
  }
};