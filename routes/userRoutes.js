const express = require('express');
const multer = require('multer');
const path = require('path');
const userController = require('../controllers/userController');

const passport = require('passport');
const auth = require('../middlewares/auth');

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

router.get('/register',auth.isLogout, userController.showRegisterForm);
router.post('/register', upload.single('image'),userController.validateRegister, userController.registerUser);

router.get('/',auth.isLogout, userController.showLoginForm);
router.post('/login',  userController.validateLogin,userController.loginUser);
router.get('/logout',auth.isLogin, userController.logoutUser);

router.get('/dashboard',auth.isLogin, userController.showDashboard);

module.exports = router;
