import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Activity, DollarSign, Calendar } from "lucide-react";

export default function DashboardPage() {
    const stats = [
        {
            title: "Total Members",
            value: "1,245",
            change: "+12% from last month",
            icon: Users,
        },
        {
            title: "Active Now",
            value: "84",
            change: "+5% from last hour",
            icon: Activity,
        },
        {
            title: "Monthly Revenue",
            value: "$45,231",
            change: "+18% from last month",
            icon: DollarSign,
        },
        {
            title: "Classes Today",
            value: "12",
            change: "4 upcoming",
            icon: Calendar,
        },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                <p className="text-gray-400">Welcome back, Admin.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                    <Card key={index} className="bg-zinc-900 border-zinc-800 text-white">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-gray-400">
                                {stat.title}
                            </CardTitle>
                            <stat.icon className="h-4 w-4 text-primary" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 bg-zinc-900 border-zinc-800 text-white">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-400">Graph placeholder...</p>
                        <div className="h-[200px] w-full bg-zinc-800/50 rounded-md mt-4 animate-pulse" />
                    </CardContent>
                </Card>
                <Card className="col-span-3 bg-zinc-900 border-zinc-800 text-white">
                    <CardHeader>
                        <CardTitle>Recent Sales</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-zinc-800" />
                                        <div>
                                            <p className="font-medium text-sm">New Member</p>
                                            <p className="text-xs text-gray-400">Basic Plan</p>
                                        </div>
                                    </div>
                                    <div className="font-bold">+$49.00</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
