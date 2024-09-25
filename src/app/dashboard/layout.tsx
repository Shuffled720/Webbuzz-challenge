"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Link from "next/link";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter();

    const navVariant = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };
    const buttonVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, delay: 1 } }
    };
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
    return (
        <>
            <motion.nav
                variants={navVariant}
                initial="hidden"
                animate="visible"
                className="backdrop-blur-sm rounded-b-lg grid grid-cols-2 justify-items-center"
            >
                <div>
                    <Link href="/dashboard">
                        <Image width={100} height={100} src="/Images/logo.png" alt="PULSE" />
                    </Link>
                </div>
                <div className="grid grid-cols-2 flex items-center">
                    <motion.div variants={buttonVariant} initial="hidden" animate="visible">
                        <Button onClick={handleLogout}>Logout</Button>
                    </motion.div>
                </div>
            </motion.nav>
            {children}
        </>
    );
}
