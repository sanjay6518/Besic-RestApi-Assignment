import express from 'express';

import { home, posttask, taskedit, taskdelete } from '../controllers/taskControl.js';

const router = express.Router();


router.get('/v1/tasks', home);

router.post('/v1/task', posttask);

router.put('/v1/task/:id', taskedit);

router.delete('/v1/task/:id', taskdelete);

export default router;
