const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();

router.get("/list", UserController.getAll);

module.exports = router;