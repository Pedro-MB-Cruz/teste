const productsRouter = require('express').Router();
const controler = require('../controllers/products');
const authMiddleware = require('../middlewares/auth/auth');
