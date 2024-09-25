"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function MultiStepForm() {
    const [currentStep, setCurrentStep] = useState(0); // Track current step
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        address: "",
    });

    // Function to update form data
    const updateFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
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
    const handleSubmit = () => {
        // Do something with form data (e.g., send it to API)
        console.log("Form submitted:", formData);
        // Reset form after submission
        setFormData({ name: "", email: "", age: "", address: "" });
        setCurrentStep(0);
    };

    // Define form steps
    const formSteps = [
        {
            label: "Step 1: Personal Information",
            content: (
                <>
                    <label className="block text-white text-xl">
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={updateFormData}
                            className="block w-full p-2 mt-2 mb-4 text-black"
                        />
                    </label>
                    <label className="block text-white text-xl">
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={updateFormData}
                            className="block w-full p-2 mt-2 mb-4 text-black"
                        />
                    </label>
                </>
            ),
        },
        {
            label: "Step 2: More Details",
            content: (
                <>
                    <label className="block text-white text-xl">
                        Age:
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={updateFormData}
                            className="block w-full p-2 mt-2 mb-4 text-black"
                        />
                    </label>
                    <label className="block text-white text-xl">
                        Address:
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={updateFormData}
                            className="block w-full p-2 mt-2 mb-4 text-black"
                        />
                    </label>
                </>
            ),
        },
        {
            label: "Step 3: Review & Submit",
            content: (
                <div>
                    <h3 className="text-white text-2xl mb-4">Review your details:</h3>
                    <p className="text-white text-lg">Name: {formData.name}</p>
                    <p className="text-white text-lg">Email: {formData.email}</p>
                    <p className="text-white text-lg">Age: {formData.age}</p>
                    <p className="text-white text-lg">Address: {formData.address}</p>
                </div>
            ),
        },
    ];

    return (
        <div className="max-w-lg mx-auto my-10 p-5 bg-gray-800 rounded-lg">
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
