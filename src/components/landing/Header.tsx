"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                    FITLIFE<span className="text-primary">PRO</span>
                </Link>
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Features
                    </Link>
                    <Link href="#membership" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Membership
                    </Link>
                    <Link href="#story" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        About
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link href="/dashboard">
                        <Button variant="ghost" className="text-white hover:bg-white/10">
                            Login
                        </Button>
                    </Link>
                    <Button>Join Now</Button>
                </div>
            </div>
        </motion.header>
    );
}
