const Book = require("../models/bookModel");

const getBooks = async (req, res) => {

    try {

        const books = await Book.getAllBooks();

        res.json(books);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

const getBook = async (req, res) => {

    try {

        const book = await Book.getBookById(req.params.id);

        if (!book) {

            return res.status(404).json({
                message: "Libro no encontrado"
            });

        }

        res.json(book);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

const createBook = async (req, res) => {

    try {

        const book = await Book.createBook(req.body);

        res.status(201).json(book);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

const updateBook = async (req, res) => {

    try {

        const book = await Book.updateBook(
            req.params.id,
            req.body
        );

        res.json(book);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

const deleteBook = async (req, res) => {

    try {

        await Book.deleteBook(req.params.id);

        res.json({
            message: "Libro eliminado correctamente"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
};