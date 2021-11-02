const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();

router.get("/list", UserController.getall);

router.post("/add", UserController.create);

router.put("/update", UserController.update);

router.delete("/delete", UserController.deleteUser);

module.exports = router;