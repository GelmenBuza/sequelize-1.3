import {DataTypes} from 'sequelize';
import sequelize from '../database.js';

const Post_ = sequelize.define('Post_', {
    title: { type: DataTypes.STRING, allowNull: false },
    status: {
        type: DataTypes.ENUM('draft', 'published', 'archived'),
        defaultValue: 'draft',
    },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

export default Post_;