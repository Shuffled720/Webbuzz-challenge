"use client";

import Cards from "@/components/HomePage/Cards";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import tournament from "@/data/tournament.json";
import axios from "axios";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; // Import motion from framer-motion

export default function Home() {
    const router = useRouter();
    const tournamentdata = tournament.tournamentdata;
    const handleLogout = async () => {
        try {
            // Call the logout API
            await axios.post("/api/userlogout");
            // Redirect to login page after successful logout
            router.push("/login");
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    // Animation Variants
    const navVariant = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const cardVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } }
    };

    const buttonVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, delay: 1 } }
    };

    return (
        <>
            <motion.nav
                variants={navVariant}
                initial="hidden"
                animate="visible"
                className="backdrop-blur-sm rounded-b-lg grid grid-cols-2 justify-items-center"
            >
                <div>
                    <Image width={100} height={100} src="/Images/logo.png" alt="PULSE" />
                </div>
                <div className="grid grid-cols-2 flex items-center">
                    <motion.div variants={buttonVariant} initial="hidden" animate="visible">
                        <Button onClick={handleLogout}>Logout</Button>
                    </motion.div>
                </div>
            </motion.nav>

            <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                className="text-center text-white text-5xl p-5"
            >
                Select Tournament
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }}
                className="text-center text-white text-3xl"
            >
                Total <span className="text-yellow-300">3+</span> ongoing tournament registration!!!
            </motion.p>

            <ul className="demos">
                {tournamentdata.map((data, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariant}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.05 }}
                    >
                        {data && <Cards data={data} />}
                    </motion.li>
                ))}
            </ul>
        </>
    );
}
