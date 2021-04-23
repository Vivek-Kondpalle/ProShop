import express from 'express';
import {
  authUsers,
  getUsersProfile,
  registerUser,
  updateUsersProfile,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(registerUser);
router.post('/login', authUsers);
router
  .route('/profile')
  .get(protect, getUsersProfile)
  .put(protect, updateUsersProfile);

export default router;
