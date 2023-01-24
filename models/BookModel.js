import {Model, DataTypes} from "sequelize"
import sequelize from "../config/sequelize.js"

class Book extends Model{}

Book.init({
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    author:{
        type:DataTypes.STRING,
        allowNull:false
    },
    genre:{
        type:DataTypes.STRING,
        allowNull:false
    },
    dateOfRelease:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    bookImage:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:"LINK"
    },
    rating:{
        type:DataTypes.NUMBER,
        allowNull:false
    },
    price:{
        type:DataTypes.NUMBER,
        allowNull:false
    }
},
    {sequelize, modelName:"book", timestamps:false}
)

export {Book};