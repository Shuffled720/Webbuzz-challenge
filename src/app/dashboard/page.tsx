"use client";

import Cards from "@/components/HomePage/Cards";

import tournament from "@/data/tournament.json";
import { motion } from "framer-motion"; // Import motion from framer-motion

export default function Home() {
    const tournamentdata = tournament.tournamentdata;


    // Animation Variants


    const cardVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } }
    };



    return (
        <>


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
