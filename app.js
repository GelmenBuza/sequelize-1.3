import {Op} from 'sequelize';
import {User, Post, Author, Book, Student, Course, Order, Item, Post_, User_} from './models/index.js';

async function getUsersWithRecentPosts() {
    return User.findAll({
        include: [{
            model: Post,
            as: 'posts',
            where: {
                publishedAt: {[Op.gt]: '2023-01-01'},
            },
            required: true
        }],
        order: [
            ['name', 'ASC'],
            [{model: Post, as: 'posts'}, 'publishedAt', "DESC"],
        ]
    })
}

async function getAllAuthorsIncludingEmpty() {
    return Author.findAll({
        include: [{
            model: Book,
            as: 'books',
            required: false,
        }],
        order: [['lastName', 'ASC']],
    });
}

async function getStudentsInAdvancedCourses() {
    return Student.findAll({
        include: [{
            model: Course,
            as: 'courses',
            where: {credits: {[Op.gt]: 3}},
            required: true,
            through: {attributes: []}
        }],
        order: [
            ['name', 'ASC'],
            [{model: Course, as: 'courses'}, 'title', 'ASC']
        ],
    });
}

async function getOrdersWithBulkItems() {
    return Order.findAll({
        include: [{
            model: Item,
            as: 'items',
            where: {quantity: {[Op.gt]: 2}},
            required: true,
        }],
        order: [
            ['createdAt', 'DESC'],
            [{model: Item, as: 'items'}, 'price', 'DESC']
        ],
    });
}

async function getActiveUsersWithPublishedPosts() {
    return User_.findAll({
        where: {isActive: true},
        include: [{
            model: Post_,
            as: 'posts_',
            where: {status: 'published'},
            required: true,
        }],
        order: [
            ['name', 'ASC'],
            [{model: Post_, as: 'posts_'}, 'createdAt', 'DESC']
        ],
    });
}

console.log(await getUsersWithRecentPosts())
console.log(await getAllAuthorsIncludingEmpty())
console.log(await getStudentsInAdvancedCourses())
console.log(await getOrdersWithBulkItems())
console.log(await getActiveUsersWithPublishedPosts())




