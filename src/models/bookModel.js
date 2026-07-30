const pool = require("../config/db");

const getAllBooks = async () => {
    const result = await pool.query(
        "SELECT * FROM books ORDER BY id ASC"
    );
    return result.rows;
};

const getBookById = async (id) => {
    const result = await pool.query(
        "SELECT * FROM books WHERE id = $1",
        [id]
    );

    return result.rows[0];
};

const createBook = async (book) => {

    const { title, author, category, year } = book;

    const result = await pool.query(
        `INSERT INTO books(title, author, category, year)
         VALUES($1,$2,$3,$4)
         RETURNING *`,
        [title, author, category, year]
    );

    return result.rows[0];
};

const updateBook = async (id, book) => {

    const { title, author, category, year } = book;

    const result = await pool.query(
        `UPDATE books
         SET title=$1,
             author=$2,
             category=$3,
             year=$4
         WHERE id=$5
         RETURNING *`,
        [title, author, category, year, id]
    );

    return result.rows[0];
};

const deleteBook = async (id) => {

    await pool.query(
        "DELETE FROM books WHERE id=$1",
        [id]
    );

};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};