import { Schema, model } from 'mongoose';

const leaderboardEntrySchema = new Schema(
  {
    rank: { type: Number, required: true, unique: true },
    username: { type: String, required: true },
    points: { type: Number, required: true },
    totalActiveMinutes: { type: Number, required: true },
    teamName: { type: String, required: true },
  },
  { timestamps: true },
);

export const LeaderboardEntry = model('LeaderboardEntry', leaderboardEntrySchema);