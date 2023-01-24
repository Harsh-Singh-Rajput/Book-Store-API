import Sequelize from "sequelize";

const sequelize = new Sequelize("book-store-db", process.env.USER, process.env.PASSWORD, {
    dialect:"sqlite",
    host:"./config/book-store-db.sqlite"
})

export default sequelize