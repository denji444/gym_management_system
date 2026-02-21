"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CTA() {
    return (
        <section className="bg-zinc-950 py-32 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />

            <div className="container px-4 mx-auto relative z-10 text-center">
                <motion.h2
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter"
                >
                    READY TO <span className="text-primary italic">ASCEND?</span>
                </motion.h2>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
                >
                    Join the elite community of athletes and visionaries. Your first session is on us.
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto"
                >
                    <Input
                        placeholder="Enter your email"
                        className="h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-primary"
                    />
                    <Button size="lg" className="h-12 px-8 text-lg w-full sm:w-auto">
                        Get Started
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
