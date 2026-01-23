const Book = require('../models/bookModel');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');

exports.getAllBooks = catchAsync(async (req, res, next) => {
  console.log(req.query);
  const features = new APIFeatures(Book.find(), req.query).filter().sort().limitFields();
  const books = await features.query;

  res.status(200).json({
    status: 'success',
    results: books.length,
    data: { books },
  });
});

exports.getBook = catchAsync(async (req, res, next) => {
  const book = await Book.findById(req.params.id);

  if (!book) {
    return res.status(404).json({
      status: 'fail',
      message: 'No book found with that ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: { book },
  });
});

exports.createBook = catchAsync(async (req, res, next) => {
  const book = await Book.create({ ...req.body });
  res.status(201).json({
    status: 'success',
    data: { book: book },
  });
});

exports.updateBook = catchAsync(async (req, res, next) => {
  const book = await Book.findById(req.params.id);

  if (!book) {
    return res.status(404).json({
      status: 'fail',
      message: 'No book found with that ID',
    });
  }

  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    data: { book: updatedBook },
  });
});

exports.deleteBook = catchAsync(async (req, res, next) => {
  const book = await Book.findById(req.params.id);

  if (!book) {
    return res.status(404).json({
      status: 'fail',
      message: 'No book found with that ID',
    });
  }

  await Book.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
