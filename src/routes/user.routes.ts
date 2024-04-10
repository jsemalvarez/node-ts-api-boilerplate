import { Router } from 'express';

import * as userContrller from '../controllers/user.controllers';
import { validateMiddleware } from '../middlewares/validate.midleware';
import { updateUser } from '../middlewares/validations/user.validations';

const router = Router();

router.post('/register', validateMiddleware(updateUser), userContrller.register);

router.get('/', userContrller.findAll);

router.get('/:userId', userContrller.findOne);

router.patch('/:userId', userContrller.update);

router.delete('/:userId', userContrller.remove);

router.post('/login', userContrller.login);

router.post('/refresh-token', userContrller.refreshToken);

router.post('/forgot-password', userContrller.forgotPassword);

router.post('/reset-password', userContrller.resetPassword);

router.post('/send-verifiaction-email', userContrller.sendVerifiactionEmail);

router.post('/verify-email', userContrller.verifyEmail);

export default router;
