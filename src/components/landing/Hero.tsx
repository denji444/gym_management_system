"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-black text-white">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* Background Video/Image Placeholder */}
            <div className="absolute inset-0 z-0">
                {/* Placeholder for video. In production, use a <video> tag. 
             For now, using a high-energy gradient/image placeholder. */}
                <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0a] to-black" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-overlay" />
            </div>

            <div className="relative z-20 flex h-full flex-col items-center justify-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter uppercase mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            Forged
                        </span>{" "}
                        <span className="text-primary">In Iron</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-10"
                >
                    Elevate your fitness journey with state-of-the-art equipment and elite training.
                    Join the revolution.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Button size="lg" className="text-lg px-8 py-6 rounded-full group">
                        Start Your Journey
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent text-lg px-8 py-6 rounded-full border-white/20 hover:bg-white/10 text-white">
                        View Classes
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 bg-white rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
