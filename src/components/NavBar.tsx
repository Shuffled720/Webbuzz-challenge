"use client";

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Link from "next/link";
const NavBar = () => {
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
                className="backdrop-blur-sm rounded-b-lg grid grid-cols-1 md:grid-cols-2  justify-items-center"
            >

                <div>
                    <Link href="/dashboard">
                        <Image width={100} height={100} src="/Images/logo.png" alt="PULSE" />
                    </Link>
                </div>
                <div className="  grid grid grid-cols-4 justify-items-center items-center gap-4">
                    <motion.div variants={buttonVariant} initial="hidden" animate="visible">
                        <Button asChild ><Link href="/dashboard">Home</Link></Button>
                    </motion.div>
                    <motion.div variants={buttonVariant} initial="hidden" animate="visible">
                        <Button asChild ><Link href="/dashboard/gallery">Gallery</Link></Button>
                    </motion.div>
                    <motion.div variants={buttonVariant} initial="hidden" animate="visible">
                        <Button asChild ><Link href="/dashboard/sponsors">Sponsors</Link></Button>
                    </motion.div>
                    <motion.div variants={buttonVariant} initial="hidden" animate="visible">
                        <Button onClick={handleLogout}>Logout</Button>
                    </motion.div>
                </div>
            </motion.nav>
        </>
    )
}

export default NavBar