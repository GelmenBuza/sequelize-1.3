import User from './User.js';
import Post from './Post.js';
import Author from './Author.js';
import Book from './Book.js';
import Student from './Student.js';
import Course from './Course.js';
import Enrollment from './Enrollment.js';
import Order from './Order.js';
import Item from './Item.js';
import User_ from './User_.js';
import Post_ from './Post_.js';

User.hasMany(Post, {foreignKey: 'authorId', as: 'posts'});
Post.belongsTo(User, {foreignKey: 'authorId', as: 'author'});

Author.hasMany(Book, {foreignKey: 'authorId', as: 'books'});
Book.belongsTo(Author, {foreignKey: 'authorId', as: 'author'});

Student.belongsToMany(Course, {through: Enrollment, as: 'courses'});
Course.belongsToMany(Student, {through: Enrollment, as: 'students'});

Order.hasMany(Item, {foreignKey: 'orderId', as: 'items'});
Item.belongsTo(Order, {foreignKey: 'orderId', as: 'order'});

User_.hasMany(Post_, { foreignKey: 'authorId', as: 'posts_' });
Post_.belongsTo(User_, { foreignKey: 'authorId', as: 'author_' });

export {Post, User, Author, Book, Student, Course, Order, Item, Post_, User_, Enrollment};