const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();

router.get("/list", UserController.getall);

router.post("/add", UserController.create);

router.put("/update", UserController.update);

module.exports = router;