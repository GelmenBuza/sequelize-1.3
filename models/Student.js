import {DataTypes} from 'sequelize';
import sequelize from '../database.js';


const Student = sequelize.define('Student', {
    name: { type: DataTypes.STRING, allowNull: false },
    group: { type: DataTypes.STRING },
});

export default Student;