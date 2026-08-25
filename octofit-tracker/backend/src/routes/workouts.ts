import { Router } from 'express';
import { Workout } from '../models/Workout.js';

const router = Router();

router.get('/', async (_request, response, next) => {
  try {
    const workouts = await Workout.find().sort({ focus: 1, title: 1 }).lean();
    response.json({ workouts });
  } catch (error) {
    next(error);
  }
});

export default router;