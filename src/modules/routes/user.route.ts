import { Router } from 'express';
import { getUser } from '../controllers/user.controller.js';

const router = Router();

export const userRoutes = (): Router => {
  /**
   * get user
   */
  router.get('/', getUser);

  return router;
};
