import sequelize from './database.js';
import {User, Post, Author, Book, Student, Course, Order, Item, Post_, User_, Enrollment} from './models/index.js';

async function init() {
    try {
        await sequelize.sync({force: true});
        console.log('Sequelize done');

        await User.bulkCreate([
            {id: 1, name: 'Alice', email: 'alice@example.com'},
            {id: 2, name: 'Bob', email: 'bob@example.com'},
            {id: 3, name: 'Charlie', email: 'charlie@example.com'},
        ]);

        await Post.bulkCreate([
            {id: 1, title: 'Старый пост', publishedAt: '2022-12-01T10:00:00Z', authorId: 1},
            {id: 2, title: 'Свежий пост Алисы', publishedAt: '2023-05-15T10:00:00Z', authorId: 1},
            {id: 3, title: 'Свежий пост Боба', publishedAt: '2023-08-20T10:00:00Z', authorId: 2},
        ]);


        await Author.bulkCreate([
            {id: 1, firstName: 'Лев', lastName: 'Толстой', country: 'Россия'},
            {id: 2, firstName: 'Джейн', lastName: 'Остин', country: 'Великобритания'},
            {id: 3, firstName: 'Николай', lastName: 'Безкнижный', country: 'Неизвестно'},
        ]);

        await Book.bulkCreate([
            {id: 1, title: 'Война и мир', year: 1869, genre: 'Роман', authorId: 1},
            {id: 2, title: 'Гордость и предубеждение', year: 1813, genre: 'Роман', authorId: 2},
        ]);


        await Student.bulkCreate([
            {id: 1, name: 'Иван', group: 'CS-101'},
            {id: 2, name: 'Мария', group: 'CS-102'},
        ]);

        await Course.bulkCreate([
            {id: 1, title: 'Продвинутая математика', credits: 4},
            {id: 2, title: 'Основы физики', credits: 2},
            {id: 3, title: 'Глубокое обучение', credits: 5},
        ]);

        await Enrollment.bulkCreate([
            {StudentId: 1, CourseId: 1, enrolledAt: new Date(), grade: 5},
            {StudentId: 1, CourseId: 2, enrolledAt: new Date(), grade: 4},
            {StudentId: 2, CourseId: 3, enrolledAt: new Date(), grade: 5},
        ]);


        await Order.bulkCreate([
            {id: 1, number: 'ORD-001', status: 'paid', createdAt: '2023-10-01T10:00:00Z'},
            {id: 2, number: 'ORD-002', status: 'new', createdAt: '2023-10-05T12:00:00Z'},
        ]);

        await Item.bulkCreate([
            {id: 1, productName: 'Ноутбук', quantity: 3, price: 1000.00, orderId: 1},
            {id: 2, productName: 'Мышка', quantity: 1, price: 25.50, orderId: 1},
            {id: 3, productName: 'Клавиатура', quantity: 5, price: 75.00, orderId: 2},
        ]);


        await User_.bulkCreate([
            {id: 1, name: 'Активный Иван', isActive: true},
            {id: 2, name: 'Неактивный Петр', isActive: false},
            {id: 3, name: 'Активный Сергей', isActive: true},
        ]);

        await Post_.bulkCreate([
            {
                id: 1,
                title: 'Опубликованный пост Ивана',
                status: 'published',
                createdAt: '2023-10-01T10:00:00Z',
                authorId: 1
            },
            {id: 2, title: 'Черновик Ивана', status: 'draft', createdAt: '2023-10-02T10:00:00Z', authorId: 1},
            {
                id: 3,
                title: 'Опубликованный пост Петра',
                status: 'published',
                createdAt: '2023-10-03T10:00:00Z',
                authorId: 2
            },
            {id: 4, title: 'Архивный пост Сергея', status: 'archived', createdAt: '2023-10-04T10:00:00Z', authorId: 3},
        ]);


    } catch (error) {
        console.error('Error: ', error);
    } finally {
        await sequelize.close();
    }
}

init();