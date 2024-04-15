import { Router } from 'express';

import { userController } from '../controllers';
import { validateDataMiddleware, validateRoleMiddleware, validateTokenMiddleware } from '../middlewares';
import { createUser, loginUser, updateUserBySelf } from '../middlewares/validations/user.validations';
import { UserRole } from '../interfaces/user.interface';

const router = Router();

router.post('/register', [validateDataMiddleware(createUser)], userController.register);

router.post('/login', [validateDataMiddleware(loginUser)], userController.login);

router.get('/profile', [validateTokenMiddleware, validateRoleMiddleware(UserRole.USER)], userController.findOne);

router.patch(
  '/',
  [validateDataMiddleware(updateUserBySelf), validateTokenMiddleware, validateRoleMiddleware(UserRole.USER)],
  userController.update,
);

router.delete('/', [validateTokenMiddleware, validateRoleMiddleware(UserRole.USER)], userController.remove);

router.post('/refresh-token', [validateTokenMiddleware], userController.refreshToken);

router.post('/forgot-password', userController.forgotPassword);

router.post('/reset-password', userController.resetPassword);

router.post('/send-verifiaction-email', userController.sendVerifiactionEmail);

router.post('/verify-email', userController.verifyEmail);

export default router;
