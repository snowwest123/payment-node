import {  DataTypes } from 'sequelize';
import { sequelize } from '../../database/mysql.js';

const Transaction = sequelize.define('Transaction', {
    userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    },
    amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
    },
    type: {
    type: DataTypes.STRING,
    allowNull: false,
    },
});

export default Transaction;
  