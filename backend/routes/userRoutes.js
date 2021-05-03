import express from 'express';
import {
  authUsers,
  getUsersProfile,
  registerUser,
  updateUsersProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/login', authUsers);
router
  .route('/profile')
  .get(protect, getUsersProfile)
  .put(protect, updateUsersProfile);
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default router;
