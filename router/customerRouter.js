import express from "express";
import customerController from "../controllers/customerController.js";

const router = express.Router();

router.get('/account', customerController.myAccount);
router.get('/login', customerController.login);
router.get('/register', customerController.register);
router.get('/forgot', customerController.forgotPassword);
router.get('/reset', customerController.resetPassword);
router.get('/logout', customerController.logout);

router.post('/login', customerController.postLogin);
router.post('/register', customerController.postRegister);
router.post('/forgot', customerController.postForgotPassword);
router.post('/reset', customerController.postResetPassword);

export default router;

