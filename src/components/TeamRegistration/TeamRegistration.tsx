"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";

interface IPlayer {
    playerName: string;
    playerAge: string;
    playerRole: "bat" | "bowl" | "all";
}

interface FormData {
    // Captain info
    captainName: string;
    captainAge: string;
    captainRole: "bat" | "bowl" | "all";

    // Team details
    teamsize: number;
    teamName: string;
    // address: string;

    // Player details
    players: IPlayer[];
}

export default function MultiStepForm() {
    const [currentStep, setCurrentStep] = useState(0); // Track current step
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({
        captainName: "",
        captainAge: "",
        captainRole: "bat",
        teamsize: 0,
        teamName: "",
        // address: "",
        players: [], // Initialize players as an empty array
    });

    // Function to update form data for captain and team fields
    const updateFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Function to update player data
    const updatePlayerData = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const updatedPlayers = [...formData.players];
        updatedPlayers[index] = {
            ...updatedPlayers[index],
            [e.target.name]: e.target.value,
        };
        setFormData({ ...formData, players: updatedPlayers });
    };

    // Function to navigate between steps
    const handleNext = () => {
        if (currentStep < formSteps.length - 1) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    // Submit handler
    const handleSubmit = async () => {
        try {
            const response = await axios.post('/api/registration', formData); // Changed API route
            console.log(response.data);
            alert('Registration successful!');
        } catch (error) {
            alert("Server side error - 505");
            console.log(error);
        }
        console.log("Form submitted:", formData);

        // Reset form after submission
        setFormData({
            captainName: "",
            captainAge: "",
            captainRole: "bat",
            teamsize: 0,
            teamName: "",
            // address: "",
            players: [],
        });
        setCurrentStep(0);
        router.push('/dashboard');
    };

    // Add players dynamically when the team size changes
    const updateTeamSize = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTeamSize = parseInt(e.target.value);
        const newPlayers = Array.from({ length: newTeamSize }, (_, index) => ({
            playerName: formData.players[index]?.playerName || "",
            playerAge: formData.players[index]?.playerAge || "",
            playerRole: formData.players[index]?.playerRole || "bat",
        }));
        setFormData({ ...formData, teamsize: newTeamSize, players: newPlayers });
    };

    // Define form steps
    const formSteps = [
        {
            label: "Step 1: Captain Details",
            content: (
                <>
                    <label className="block text-white text-xl">
                        Captain Name:
                        <input
                            type="text"
                            name="captainName"
                            value={formData.captainName}
                            onChange={updateFormData}
                            className="block w-full p-2 mt-2 mb-4 text-black"
                        />
                    </label>
                    <label className="block text-white text-xl">
                        Captain&apos;s Age:
                        <input
                            type="number"
                            name="captainAge"
                            value={formData.captainAge}
                            onChange={updateFormData}
                            className="block w-full p-2 mt-2 mb-4 text-black"
                        />
                    </label>
                    <label className="block text-white text-xl">
                        Captain&apos;s Role:
                        {/* <input
                            type="text"
                            name="captainRole"
                            value={formData.captainRole}
                            onChange={updateFormData}
                            className="block w-full p-2 mt-2 mb-4 text-black"
                        /> */}
                        <select name="captainRole" className="block w-full p-2 mt-2 mb-4 text-black" >
                            <option value={formData.captainRole}>--Please choose an option--</option>
                            <option value="bat">Batting</option>
                            <option value="bowl">Bowling</option>
                            <option value="all">All Rounder</option>
                        </select>
                    </label>
                </>
            ),
        },
        {
            label: "Step 2: Team Details",
            content: (
                <>
                    <label className="block text-white text-xl">
                        Team Size:
                        <input
                            type="number"
                            name="teamsize"
                            value={formData.teamsize}
                            onChange={updateTeamSize}
                            className="block w-full p-2 mt-2 mb-4 text-black"
                        />
                    </label>
                    <label className="block text-white text-xl">
                        Team Name:
                        <input
                            type="text"
                            name="teamName"
                            value={formData.teamName}
                            onChange={updateFormData}
                            className="block w-full p-2 mt-2 mb-4 text-black"
                        />
                    </label>
                </>
            ),
        },
        {
            label: "Step 3: Adding Players",
            content: (
                <>
                    {formData.players.map((player, index) => (
                        <div className="" key={index}>
                            <h3 className="text-white text-2xl">Player {index + 1}</h3>
                            <div className="grid grid-cols-3 gap-3">
                                <label className="block text-white text-xl">
                                    Player Name:
                                    <input
                                        type="text"
                                        name="playerName"
                                        value={player.playerName}
                                        onChange={(e) => updatePlayerData(index, e)}
                                        className="block w-full p-2 mt-2 mb-4 text-black"
                                    />
                                </label>
                                <label className="block text-white text-xl">
                                    Player Age:
                                    <input
                                        type="number"
                                        name="playerAge"
                                        value={player.playerAge}
                                        onChange={(e) => updatePlayerData(index, e)}
                                        className="block w-full p-2 mt-2 mb-4 text-black"
                                    />
                                </label>
                                <label className="block text-white text-xl">
                                    Player Role:
                                    {/* <input
                                        type="text"
                                        name="playerRole"
                                        value={player.playerRole}
                                        onChange={(e) => updatePlayerData(index, e)}
                                        className="block w-full p-2 mt-2 mb-4 text-black"
                                    /> */}
                                    <select name="playerRole" className="block w-full p-2 mt-2 mb-4 text-black" onChange={(e) => updatePlayerData(index, e)}>
                                        <option value={player.playerRole}>--Please choose an option--</option>
                                        <option value="bat">Batting</option>
                                        <option value="bowl">Bowling</option>
                                        <option value="all">All Rounder</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                    ))}
                </>
            ),
        },
        {
            label: "Step 4: Preview",
            content: (
                <>
                    <h2 className="text-slate-400 text-2xl">Captain Details:</h2>
                    <p className="text-white text-lg">Name: {formData.captainName}</p>
                    <p className="text-white text-lg">Age: {formData.captainAge}</p>
                    {/* <p className="text-white text-lg">Role: {formData.captainRole}</p> */}
                    <p className="text-white text-lg">Role: {formData.captainRole === 'bat' ? 'Batting' : formData.captainRole === 'bowl' ? 'Bowling' : 'All Rounder'}</p>

                    <h2 className="text-slate-400 text-2xl mt-5">Team Details:</h2>
                    <p className="text-white text-lg">Team Name: {formData.teamName}</p>
                    <p className="text-white text-lg">Team Size: {formData.teamsize}</p>

                    <h2 className="text-slate-400 text-2xl mt-5">Players:</h2>
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-slate-400 text-3xl">Sr.No</th>
                                <th className="text-slate-400 text-3xl">Name</th>
                                <th className="text-slate-400 text-3xl">Age</th>
                                <th className="text-slate-400 text-3xl">Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formData.players.map((player, index) => (
                                <tr key={index}>
                                    <td className="text-white text-center text-xl">{index + 1}</td>
                                    <td className="text-white text-center text-xl">{player.playerName}</td>
                                    <td className="text-white text-center text-xl">{player.playerAge}</td>
                                    {/* <td className="text-white text-center text-xl">{player.playerRole}</td> */}
                                    <td className="text-white text-center text-xl">{player.playerRole === 'bat' ? 'Batting' : player.playerRole === 'bowl' ? 'Bowling' : 'All Rounder'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )
        }
    ];

    return (
        <div className="max-w-4xl mx-auto my-10 p-5 bg-gray-800 rounded-lg">
            <h2 className="text-white text-3xl text-center mb-5">
                {formSteps[currentStep].label}
            </h2>

            {/* Form Step Content */}
            <motion.div
                key={currentStep} // key is important for animation between steps
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="mb-8"
            >
                {formSteps[currentStep].content}
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
                {currentStep > 0 && (
                    <Button onClick={handlePrevious}>Previous</Button>
                )}
                {currentStep < formSteps.length - 1 ? (
                    <Button onClick={handleNext}>Next</Button>
                ) : (
                    <Button onClick={handleSubmit}>Submit</Button>
                )}
            </div>
        </div>
    );
}
