import sequelize from "./database.js";

async function testConnection() {
    try {
        await sequelize.authenticate()
        console.log("Connected to the database");
    } catch (error) {
        console.log('Connection error: ',error);
    }
}

testConnection();