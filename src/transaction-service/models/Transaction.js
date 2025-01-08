import {  DataTypes } from 'sequelize';
import { sequelize } from '../../database/mysql.js';
import { v4 as uuidv4 } from 'uuid';

const Transaction = sequelize.define('Transaction', {
    userId: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    id: {
        type: DataTypes.STRING,
        defaultValue: uuidv4, 
        primaryKey: true,
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
}, {
    tableName: 'Transactions', // 自定义表名
    timestamps: false, // 禁用 createdAt 和 updatedAt
  });

export default Transaction;
  