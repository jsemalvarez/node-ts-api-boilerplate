import { Router } from 'express';

import * as userContrller from '../controllers/user.controllers';

const router = Router();

router.post('/register', userContrller.register);

router.get('/', userContrller.findAll);

router.get('/:userId', userContrller.findOne);

router.patch('/:userId', userContrller.update);

router.delete('/:userId', userContrller.remove);

router.post('/login', userContrller.login);

router.post('/refresh-tokens', userContrller.refreshTokens);

router.post('/forgot-tokens', userContrller.forgotTokens);

router.post('/reset-tokens', userContrller.resetTokens);

router.post('/send-verifiaction-email', userContrller.sendVerifiactionEmail);

router.post('/verify-email', userContrller.verifyEmail);

export default router;
