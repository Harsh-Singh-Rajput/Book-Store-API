import sequelize from "../config/sequelize.js";
import { Book } from "../models/BookModel.js";
import express from "express";
const router = express.Router()

sequelize.sync().then(() =>{
    console.log("DB is Running");
})


router.get("/books", async(req,res)=>{
    const allBooks = await Book.findAll()
    return res.status(200).send(allBooks)
})


router.get("/books/:id", async(req,res)=>{
    const id = req.params.id
    const book = await Book.findOne({
        where:{
            id
        }
    })
    if(book) return res.status(200).send(book)
    return res.status(404).send({err:`Book with id:${id} not found`})
})


router.post("/books/add", async(req,res)=>{
    const {name, author, genre, dateOfRelease, rating, price} = req.body
    if(!req.body.hasOwnProperty("name") || !name){
        return res.status(400).send({err:`name key is missing or its value is null or empty`})
    }
    if(!req.body.hasOwnProperty("author") ||  !author){
        return res.status(400).send({err:`author key is missing or its value is null or empty`})
    }
    if(!req.body.hasOwnProperty("genre") || !genre){
        return res.status(400).send({err:`genre key is missing or its value is null or empty`})
    }
    if(!req.body.hasOwnProperty("dateOfRelease") || !dateOfRelease){
        return res.status(400).send({err:`dateOfRelease key is missing or its value is null or empty`})
    }
    if(!req.body.hasOwnProperty("rating") || !rating){
        return res.status(400).send({err:`rating can't be null or empty`})
    }
    if(!req.body.hasOwnProperty("price") || !price){
        return res.status(400).send({err:`price can't be null or empty`})
    }
    const createBook = {
        name,
        author,
        genre,
        dateOfRelease,
        rating,
        price
    }
    const book = await Book.create(createBook)
    if(book) return res.status(201).send(book)
    return res.status(404).send({err:`Book not added`})
})


router.put("/books/:id", async(req,res)=>{
    const id = req.params.id
    const {name, author, genre, dateOfRelease, rating, price} = req.body
    if(!req.body.hasOwnProperty("name") || !name){
        return res.status(400).send({err:`name key is missing or its value is null or empty`})
    }
    if(!req.body.hasOwnProperty("author") ||  !author){
        return res.status(400).send({err:`author key is missing or its value is null or empty`})
    }
    if(!req.body.hasOwnProperty("genre") || !genre){
        return res.status(400).send({err:`genre key is missing or its value is null or empty`})
    }
    if(!req.body.hasOwnProperty("dateOfRelease") || !dateOfRelease){
        return res.status(400).send({err:`dateOfRelease key is missing or its value is null or empty`})
    }
    if(!req.body.hasOwnProperty("rating") || !rating){
        return res.status(400).send({err:`rating can't be null or empty`})
    }
    if(!req.body.hasOwnProperty("price") || !price){
        return res.status(400).send({err:`price can't be null or empty`})
    }
    const updateBook = {
        name,
        author,
        genre,
        dateOfRelease,
        rating,
        price
    }
    const updatedBook = await Book.update(updateBook, {
        where:{
            id
        }
    })
    if(updateBook) return res.status(200).send(updateBook)
    return res.status(404).send({err:`Book with id:${id} not updated`})
})


router.delete("/books/:id", async(req,res)=>{
    const id = req.params.id
    const book = await Book.destroy({
        where:{
            id
        }
    })
    if(book) return res.status(200).send({message:`Book with id:${id} is deleted successfully`})
    return res.status(404).send({err:`Book with id:${id} is not deleted`})
})

export default router