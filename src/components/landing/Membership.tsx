"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const tiers = [
    {
        name: "Initiate",
        price: "$49",
        description: "Essential access for the dedicated beginner.",
        features: [
            "Access to gym floor",
            "Locker room access",
            "1 Intro PT session",
            "Free WiFi",
        ],
    },
    {
        name: "Warrior",
        price: "$99",
        description: "For those who demand more from their training.",
        features: [
            "24/7 Access",
            "Group classes included",
            "Sauna & Steam room",
            "Nutrition consultation",
            "Guest passes (2/month)",
        ],
        popular: true,
    },
    {
        name: "Titan",
        price: "$199",
        description: "The ultimate experience for peak performance.",
        features: [
            "All Warrior benefits",
            "Unlimited PT sessions",
            "Private recovery suite",
            "Gear laundry service",
            "Priority booking",
            "Exclusive merchandise",
        ],
    },
];

export default function Membership() {
    return (
        <section className="bg-black py-24 text-white">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold uppercase mb-4"
                    >
                        Choose Your <span className="text-primary">Path</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-400"
                    >
                        Unlock your potential with plans designed for every level.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className={`bg-zinc-900 border-zinc-800 text-white h-full hover:border-primary/50 transition-colors ${tier.popular ? "border-primary ring-1 ring-primary relative" : ""}`}>
                                {tier.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black px-4 py-1 rounded-full text-sm font-bold">
                                        Most Popular
                                    </div>
                                )}
                                <CardHeader>
                                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                                    <CardDescription className="text-gray-400">
                                        {tier.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-4xl font-bold mb-6">
                                        {tier.price}<span className="text-xl font-normal text-gray-400">/mo</span>
                                    </div>
                                    <ul className="space-y-3">
                                        {tier.features.map((feature, i) => (
                                            <li key={i} className="flex items-center text-gray-300">
                                                <Check className="h-5 w-5 text-primary mr-2" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className={`w-full ${tier.popular ? "bg-primary hover:bg-primary/90 text-black" : "bg-white text-black hover:bg-gray-200"}`}>
                                        Join Now
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
