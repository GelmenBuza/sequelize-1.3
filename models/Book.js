import {DataTypes} from 'sequelize';
import sequelize from '../database.js';


const Book = sequelize.define('Book', {
    title: {type: DataTypes.STRING, allowNull: false},
    year: {type: DataTypes.INTEGER},
    genre: {type: DataTypes.STRING},
});

export default Book;