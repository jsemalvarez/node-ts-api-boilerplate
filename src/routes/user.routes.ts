import { Router } from 'express';

import * as userContrller from '../controllers/user.controllers';
import { validateDataMiddleware, validateTokenMiddleware, validateRoleMiddleware } from '../middlewares';
import { createUser, getUser, loginUser, removeUser, updateUser } from '../middlewares/validations/user.validations';
import { UserRole } from '../interfaces/user.interface';

const router = Router();

router.post('/register', [validateDataMiddleware(createUser)], userContrller.register);

router.get('/', [validateTokenMiddleware, validateRoleMiddleware(UserRole.ADMIN)], userContrller.findAll);

router.get('/:userId', [validateDataMiddleware(getUser), validateTokenMiddleware], userContrller.findOne);

router.patch('/:userId', [validateDataMiddleware(updateUser), validateTokenMiddleware], userContrller.update);

router.delete(
  '/:userId',
  [validateDataMiddleware(removeUser), validateTokenMiddleware, validateRoleMiddleware(UserRole.ADMIN)],
  userContrller.remove,
);

router.post('/login', [validateDataMiddleware(loginUser)], userContrller.login);

router.post('/refresh-token', [validateTokenMiddleware], userContrller.refreshToken);

router.post('/forgot-password', userContrller.forgotPassword);

router.post('/reset-password', userContrller.resetPassword);

router.post('/send-verifiaction-email', userContrller.sendVerifiactionEmail);

router.post('/verify-email', userContrller.verifyEmail);

export default router;
