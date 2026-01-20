const express = require('express');

const bookController = require('../controllers/bookController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, bookController.getAllBooks)
  .put(bookController.createBook);

router.route('/:id').get(authController.protect, bookController.getBook);

module.exports = router;
