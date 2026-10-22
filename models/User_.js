import {DataTypes} from 'sequelize';
import sequelize from '../database.js';

const User_ = sequelize.define('User_', {
    name: { type: DataTypes.STRING, allowNull: false },
    isActive: { type: DataTypes.BOOLEAN, defaultValue: true },
});

export default User_;