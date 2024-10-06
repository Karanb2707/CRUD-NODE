const express = require('express');
const { getStudents, createStudent, updateStudent } = require('../controllers/studentController');
const router = express.Router();

//Get api
router.get('/', getStudents);

//Create api
router.post('/', createStudent);

//Update api
router.put('/:id', updateStudent);

module.exports = router;
