import {DataTypes} from 'sequelize';
import sequelize from '../database.js';

const Enrollment = sequelize.define('Enrollment', {
    enrolledAt: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
    grade: {type: DataTypes.INTEGER},
});

export default Enrollment;