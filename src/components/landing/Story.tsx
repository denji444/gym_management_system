"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "The Philosophy",
        description:
            "We believe that strength is not just physical. It's a mindset. It's the discipline to show up, the resilience to push through, and the courage to fail.",
        image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=2574&auto=format&fit=crop",
    },
    {
        title: "The Environment",
        description:
            "Designed for the elite. Equipped with the best. An atmosphere that demands greatness and fuels your ambition.",
        image: "https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=2670&auto=format&fit=crop",
    },
    {
        title: "The Community",
        description:
            "Surround yourself with those who challenge you. Our community is built on mutual respect and a shared drive for excellence.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop",
    },
];

export default function Story() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-black">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                {features.map((feature, index) => {
                    // range for this feature
                    const rangeStart = index / features.length;
                    const rangeEnd = (index + 1) / features.length;
                    const rangeMid = (rangeStart + rangeEnd) / 2;

                    // Animations for opacity/scale based on scroll
                    const opacity = useTransform(
                        scrollYProgress,
                        [rangeStart, rangeStart + 0.1, rangeEnd - 0.1, rangeEnd],
                        [0, 1, 1, 0]
                    );

                    const scale = useTransform(
                        scrollYProgress,
                        [rangeStart, rangeEnd],
                        [0.85, 1.1]
                    );

                    // Content text opacity
                    const textOpacity = useTransform(
                        scrollYProgress,
                        [rangeStart + 0.1, rangeMid, rangeEnd - 0.1],
                        [0, 1, 0]
                    );

                    return (
                        <motion.div
                            key={index}
                            style={{ opacity }}
                            className="absolute inset-0 flex items-center justify-center p-8"
                        >
                            <div className="absolute inset-0 z-0">
                                <motion.div
                                    style={{ scale }}
                                    className="h-full w-full bg-cover bg-center transition-transform duration-700"
                                >
                                    <img src={feature.image} alt={feature.title} className="h-full w-full object-cover opacity-50" />
                                    <div className="absolute inset-0 bg-black/60" />
                                </motion.div>
                            </div>

                            <div className="relative z-10 max-w-4xl text-center">
                                <motion.h2
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.8 }}
                                    className="mb-6 text-5xl font-bold uppercase tracking-tighter text-white md:text-8xl"
                                >
                                    {feature.title}
                                </motion.h2>
                                <motion.p
                                    initial={{ y: 30, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="text-xl text-gray-300 md:text-3xl"
                                >
                                    {feature.description}
                                </motion.p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
