import express from "express";
import {
  deleteContactById,
  deleteUserById,
  getAllContacts,
  getAllUsers,
  getUserById,
  updateUserById,
} from "../controllers/admin-controller.js";
import { authMiddleware } from "../middlewares/auth-middleware.js";
import { adminMiddleware } from "../middlewares/admin-middleware.js";

const router = express.Router();

router.route("/users").get(authMiddleware, adminMiddleware, getAllUsers);

router.route("/users/:id").get(authMiddleware, adminMiddleware, getUserById);

router
  .route("/users/update/:id")
  .patch(authMiddleware, adminMiddleware, updateUserById);

router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminMiddleware, deleteUserById);

router.route("/contacts").get(authMiddleware, adminMiddleware, getAllContacts);

router
  .route("/contacts/delete/:id")
  .delete(authMiddleware, adminMiddleware, deleteContactById);

export default router ;
