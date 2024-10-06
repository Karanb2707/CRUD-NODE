const express = require('express');
const { getStudents, createStudent, updateStudent } = require('../controllers/studentController');
const router = express.Router();

// GET /api/students - Retrieve all students
router.get('/', getStudents);

// POST /api/students - Create a new student
router.post('/', createStudent);

// PUT /api/students/:id - Update a student by ID
router.put('/:id', updateStudent);

module.exports = router;
