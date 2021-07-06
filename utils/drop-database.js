const mysql = require('mysql2/promise');

const path = require('path');

const envFile = '../.env.test';

require('dotenv').config({
    path: path.join(__dirname, envFile),
});

const { DB_PASSWORD, DB_NAME, DB_USER, DB_HOST, DB_PORT } = process.env;

const dropDatabase = async () => {
    try {
        const db = await mysql.createConnection({
            host: DB_HOST,
            user: DB_USER,
            password: DB_PASSWORD,
            port: DB_PORT,
        });
    await db.query(`DROP DATABASE ${DB_NAME}`);
    db.close();
    } catch (err) {
        console.log('Your environment variables may be wrong. Please double check the .env file.');
        console.log('Enviornment variables are:', {
            DB_PASSWORD,
            DB_NAME,
            DB_USER,
            DB_HOST,
            DB_PORT,
        });
        console.log(err);
    }
};

dropDatabase();