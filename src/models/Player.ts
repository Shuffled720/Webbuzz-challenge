import mongoose, { Schema, Document } from 'mongoose';

// Define Player interface
interface IPlayer extends Document {
    playerName: string;
    playerAge: string;
    playerRole: 'bat' | 'bowl' | 'all';
}

// Define Player schema
const playerSchema: Schema = new Schema({
    playerName: { type: String, required: true },
    playerAge: { type: String, required: true },
    playerRole: { type: String, enum: ['bat', 'bowl', 'all'], required: true },
});

// Create and export the Player model
const Player = mongoose.models.Player || mongoose.model<IPlayer>('Player', playerSchema);
export { Player };    export type { IPlayer };

