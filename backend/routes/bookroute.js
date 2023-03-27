const express = require("express");

const router = express.Router();

const addBook = require("../controllers/books/addBook");
const getBook = require("../controllers/books/getBook");
const getAllBooks = require("../controllers/books/getAllBooks");
const updateBook = require("../controllers/books/updateBook");
const deleteBook = require("../controllers/books/deleteBook");

router.post("/addbook", addBook);
router.post("/updatebook/:bookid", updateBook);
router.get("/getbook/:bookid", getBook);
router.get("/deletebook/:bookid", deleteBook);
router.get("/getallbooks", getAllBooks); 

module.exports = router;