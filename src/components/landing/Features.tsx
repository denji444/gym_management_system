"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Dumbbell, Users, Activity, Zap } from "lucide-react";

const features = [
    {
        icon: <Dumbbell className="h-12 w-12 text-primary mb-4" />,
        title: "Elite Equipment",
        description: "Every machine, every weight, every tool is chosen for performance. No compromises.",
    },
    {
        icon: <Activity className="h-12 w-12 text-primary mb-4" />,
        title: "Performance Tracking",
        description: "Advanced biometrics and workout tracking integrated into your experience.",
    },
    {
        icon: <Users className="h-12 w-12 text-primary mb-4" />,
        title: "Expert Coaching",
        description: "Train with champions. Our coaches are world-class athletes and experts.",
    },
    {
        icon: <Zap className="h-12 w-12 text-primary mb-4" />,
        title: "Recovery Zone",
        description: "Cryotherapy, sauna, and massage to keep you performing at your peak.",
    },
];

export default function Features() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const xTrans = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <section ref={containerRef} className="bg-zinc-950 py-24 overflow-hidden">
            <div className="container px-4 mx-auto mb-16">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase"
                >
                    Engineered <span className="text-primary">Perfection</span>
                </motion.h2>
            </div>

            <div className="relative w-full">
                <motion.div
                    className="flex gap-8 px-4 w-max"
                    style={{ x: xTrans }}
                >
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="w-[80vw] md:w-[400px] h-[500px] bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-end transition-colors hover:border-primary/50 group"
                        >
                            <div className="mb-auto">
                                <div className="p-4 bg-zinc-800 rounded-2xl w-fit group-hover:bg-primary/20 transition-colors">
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">{feature.title}</h3>
                            <p className="text-zinc-400 text-lg">{feature.description}</p>
                        </div>
                    ))}
                    {/* Duplicate for infinite scroll feel if needed, or just let it scroll */}
                    {features.map((feature, index) => (
                        <div
                            key={`dup-${index}`}
                            className="w-[80vw] md:w-[400px] h-[500px] bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-end transition-colors hover:border-primary/50 group"
                        >
                            <div className="mb-auto">
                                <div className="p-4 bg-zinc-800 rounded-2xl w-fit group-hover:bg-primary/20 transition-colors">
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">{feature.title}</h3>
                            <p className="text-zinc-400 text-lg">{feature.description}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
