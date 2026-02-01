# Shelf API
RESTful book management API with JWT authentication and role-based access control.
Built with Node.js, Express, and MongoDB. Designed as a clean reference for JWT auth + CRUD patterns.

## Description
This project implements a book management API with:
- JWT-based authentication (signup, login)
- Role-based authorization (`user` vs `admin`)
- Full CRUD on books (`title`, `author`, `isbn`, etc.)
- Query filtering, sorting, field limiting, and pagination via a reusable `APIFeatures` class
- Custom error handling with operational errors

Admins can create/update/delete books; all authenticated users can read.

## Interesting Techniques Used

- **Async/await + centralized error handling** - All async controllers wrapped with `catchAsync` to avoid repetitive try/catch blocks.
- **Query builder pattern** - `apiFeatures` class abstracts filtering, sorting, field limiting, and pagination for reusable MongoDB queries.
- **JWT authentication** - Token generation and verification using `jsonwebtoken`.
- **Route protection and role-based access** - Middleware (protect, restrictTo) guards routes and validates user roles before controller execution.
- **Mongoose schema design** - Password hashing with `bcryptjs` in pre-save hook, `correctPassword` instance method, `select: false` to hide password by default.
- **Custom AppError class** - Extends native `Error` with status code and operational flag for consistent API error responses.
- **Environment-based config** - Uses `dotenv` to load `.env` file (MongoDB URI, JWT secret, etc.).

## Libraries and Tools
- [Express](https://expressjs.com/) – Web framework
- [Mongoose](https://mongoosejs.com/) – MongoDB object modeling
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) – JWT creation & verification
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js) – Password hashing
- [validator](https://github.com/validatorjs/validator.js) – Email validation (used in user schema)
- [dotenv](https://github.com/motdotla/dotenv) – Environment variables
