import express from 'express';
import database from './database/setup'

const router = express.Router();

router.get('/hello', async (_req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

router.get('/database', async (_req, res) => {
  res.status(200).json({ message: `Database is connected ${database.status}` });
});

export default router;
