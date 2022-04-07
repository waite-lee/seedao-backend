import Router from 'express';
import notionRoute from '@server/v1/notion/notion.route';

const router = Router();
router.use('/notion', notionRoute);

export default router;
