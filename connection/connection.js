import "dotenv/config";
import { Sequelize } from "sequelize";
const database = process.env.DATABASE;
const username = process.env.DB_USERNAME;
const pasword = process.env.DB_PASSWORD;
const dialect = process.env.DB_DIALECT;
const connection = new Sequelize(database, username,pasword,{
    host: 'localhost',
    dialect,
    port:3306
});
try {
    await connection.authenticate()
    console.log("db connection ok")
} catch (error) {
    console.log(`error:${error}`)
}

export default connection