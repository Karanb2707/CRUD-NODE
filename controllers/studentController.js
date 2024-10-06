const Student = require('../models/Student');

// @desc Get all students
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Create a new student
exports.createStudent = async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const newStudent = new Student({ name, email, age });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc Update a student by ID
exports.updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  try {
    const updatedStudent = await Student.findByIdAndUpdate(id, { name, email, age }, { new: true });
    if (!updatedStudent) return res.status(404).json({ message: 'Student not found' });
    res.json(updatedStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
