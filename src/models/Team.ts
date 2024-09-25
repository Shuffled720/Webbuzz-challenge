import mongoose, { Schema, Document } from 'mongoose';
import { IPlayer, Player } from './Player';

// Define Team interface
interface ITeam extends Document {
    captainName: string;
    captainAge: string;
    captainRole: 'bat' | 'bowl' | 'all';
    teamsize: number;
    teamName: string;
    // address: string;
    players: IPlayer[];
}

// Define Team schema
const teamSchema: Schema = new Schema({
    captainName: { type: String, required: true },
    captainAge: { type: String, required: true },
    captainRole: { type: String, enum: ['bat', 'bowl', 'all'], required: true },
    teamsize: { type: Number, required: true },
    teamName: { type: String, required: true },
    // address: { type: String, required: true },
    players: { type: [Player.schema], required: true },
});

// Create and export the Team model
const Team = mongoose.models.Team || mongoose.model<ITeam>('Team', teamSchema);
export { Team };    export type { ITeam };

