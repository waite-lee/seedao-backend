import Router from 'express';
import notionController from './notion.controller';

const router = Router();
router.route('/').post(notionController.fetchNotionData);

export default router;