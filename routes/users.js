const express = require('express');
const router = express.Router();
const {
    createUser,
    loginUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} = require('../controllers/userControllers.js');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

// Rutas de usuarios
router.post('/', createUser);
router.post('/login', loginUser);
router.get('/', authMiddleware, adminMiddleware, getAllUsers);
router.get('/:id', authMiddleware, adminMiddleware, getUserById);
router.put('/:id', authMiddleware, adminMiddleware, updateUser);
router.delete('/:id', authMiddleware, adminMiddleware, deleteUser);

module.exports = router;
