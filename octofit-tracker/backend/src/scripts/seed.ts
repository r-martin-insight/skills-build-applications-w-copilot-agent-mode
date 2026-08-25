import mongoose from 'mongoose';
import { connectDatabase } from '../config/database.js';
import { Activity } from '../models/Activity.js';
import { LeaderboardEntry } from '../models/LeaderboardEntry.js';
import { Team } from '../models/Team.js';
import { User } from '../models/User.js';
import { Workout } from '../models/Workout.js';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    console.log('Seed the octofit_db database with test data');
    await connectDatabase();

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await User.insertMany([
      {
        name: 'Mona Patel',
        email: 'mona.patel@example.com',
        username: 'mona_moves',
        age: 32,
        fitnessGoal: 'Build endurance for a half marathon',
        preferredWorkout: 'Running',
      },
      {
        name: 'Diego Morales',
        email: 'diego.morales@example.com',
        username: 'diego_lifts',
        age: 28,
        fitnessGoal: 'Increase strength and mobility',
        preferredWorkout: 'Strength training',
      },
      {
        name: 'Ava Chen',
        email: 'ava.chen@example.com',
        username: 'ava_flow',
        age: 41,
        fitnessGoal: 'Improve flexibility and daily energy',
        preferredWorkout: 'Yoga',
      },
      {
        name: 'Sam Wilson',
        email: 'sam.wilson@example.com',
        username: 'sam_cycles',
        age: 35,
        fitnessGoal: 'Complete a century ride',
        preferredWorkout: 'Cycling',
      },
    ]);

    await Team.insertMany([
      {
        name: 'Cardio Crew',
        city: 'Austin',
        coach: 'Jordan Lee',
        memberUsernames: ['mona_moves', 'sam_cycles'],
        weeklyGoalMinutes: 360,
      },
      {
        name: 'Strength Squad',
        city: 'Denver',
        coach: 'Priya Shah',
        memberUsernames: ['diego_lifts', 'ava_flow'],
        weeklyGoalMinutes: 300,
      },
    ]);

    await Activity.insertMany([
      {
        username: 'mona_moves',
        activityType: 'Run',
        durationMinutes: 48,
        caloriesBurned: 430,
        activityDate: new Date('2026-08-21T12:30:00.000Z'),
        notes: 'Tempo intervals around the lake trail',
      },
      {
        username: 'diego_lifts',
        activityType: 'Strength training',
        durationMinutes: 55,
        caloriesBurned: 360,
        activityDate: new Date('2026-08-22T18:00:00.000Z'),
        notes: 'Squat and deadlift progression day',
      },
      {
        username: 'ava_flow',
        activityType: 'Yoga',
        durationMinutes: 40,
        caloriesBurned: 160,
        activityDate: new Date('2026-08-23T13:15:00.000Z'),
        notes: 'Hip mobility and breathwork session',
      },
      {
        username: 'sam_cycles',
        activityType: 'Cycling',
        durationMinutes: 75,
        caloriesBurned: 620,
        activityDate: new Date('2026-08-24T11:00:00.000Z'),
        notes: 'Rolling hills route with sprint finishes',
      },
    ]);

    await LeaderboardEntry.insertMany([
      {
        rank: 1,
        username: 'sam_cycles',
        points: 1480,
        totalActiveMinutes: 420,
        teamName: 'Cardio Crew',
      },
      {
        rank: 2,
        username: 'mona_moves',
        points: 1325,
        totalActiveMinutes: 385,
        teamName: 'Cardio Crew',
      },
      {
        rank: 3,
        username: 'diego_lifts',
        points: 1190,
        totalActiveMinutes: 330,
        teamName: 'Strength Squad',
      },
      {
        rank: 4,
        username: 'ava_flow',
        points: 980,
        totalActiveMinutes: 295,
        teamName: 'Strength Squad',
      },
    ]);

    await Workout.insertMany([
      {
        title: 'Endurance Builder Run',
        focus: 'Cardio',
        difficulty: 'Intermediate',
        durationMinutes: 45,
        equipment: ['Running shoes'],
        recommendedForGoal: 'Build endurance for a half marathon',
      },
      {
        title: 'Foundational Barbell Strength',
        focus: 'Strength',
        difficulty: 'Intermediate',
        durationMinutes: 50,
        equipment: ['Barbell', 'Squat rack', 'Plates'],
        recommendedForGoal: 'Increase strength and mobility',
      },
      {
        title: 'Morning Mobility Flow',
        focus: 'Flexibility',
        difficulty: 'Beginner',
        durationMinutes: 30,
        equipment: ['Yoga mat'],
        recommendedForGoal: 'Improve flexibility and daily energy',
      },
      {
        title: 'Century Ride Prep',
        focus: 'Cycling',
        difficulty: 'Advanced',
        durationMinutes: 90,
        equipment: ['Bike', 'Helmet', 'Water bottles'],
        recommendedForGoal: 'Complete a century ride',
      },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
