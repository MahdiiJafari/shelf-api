const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A book must have a name"],
      unique: true,
      trim: true,
    },
    author: { type: String, required: [true, "A book msut have a author"] },
    isbn: { type: String, unique: [true, "A book msut have a ISBN"] },
    publishedYear: { type: Number },
    genre: String,
    description: String,
    coverImage: String,
    addedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
