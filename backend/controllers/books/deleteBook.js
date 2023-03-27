const Book = require("../../models/bookmodel");

const deleteBook = async (req, res) => {
  try {
    const bookId = req.params.bookid;

    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    await Book.findByIdAndRemove(bookId);

    return res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = deleteBook;
