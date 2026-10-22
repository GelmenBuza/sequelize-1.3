import {DataTypes} from 'sequelize';
import sequelize from '../database.js';

const Author = sequelize.define('Author', {
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    country: { type: DataTypes.STRING },
});

export default Author;