import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, MapPin, Users } from "lucide-react";

const classes = [
    {
        id: 1,
        name: "HIIT Blast",
        instructor: "Sarah Connors",
        time: "06:00 AM - 07:00 AM",
        location: "Studio A",
        capacity: "20/25",
        status: "Upcoming",
    },
    {
        id: 2,
        name: "Power Yoga",
        instructor: "Zen Master",
        time: "08:00 AM - 09:00 AM",
        location: "Studio B",
        capacity: "15/20",
        status: "Upcoming",
    },
    {
        id: 3,
        name: "CrossFit WOD",
        instructor: "Jack Reacher",
        time: "12:00 PM - 01:00 PM",
        location: "Main Gym",
        capacity: "25/30",
        status: "Upcoming",
    },
    {
        id: 4,
        name: "Spin Cycle",
        instructor: "Lance A.",
        time: "05:30 PM - 06:30 PM",
        location: "Studio C",
        capacity: "5/15",
        status: "Open",
    },
];

export default function ClassesPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Class Schedule</h2>
                    <p className="text-gray-400">View and manage upcoming classes.</p>
                </div>
                <Button className="bg-primary text-black hover:bg-primary/90">
                    Schedule Class
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {classes.map((cls) => (
                    <Card key={cls.id} className="bg-zinc-900 border-zinc-800 text-white hover:border-primary/50 transition-colors group">
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle className="text-xl mb-1 group-hover:text-primary transition-colors">{cls.name}</CardTitle>
                                    <p className="text-sm text-gray-400">with {cls.instructor}</p>
                                </div>
                                <span className={`px-2 py-1 rounded-full text-xs font-bold ${cls.status === 'Upcoming' ? 'bg-blue-500/20 text-blue-500' : 'bg-green-500/20 text-green-500'}`}>
                                    {cls.status}
                                </span>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center text-sm text-gray-300">
                                <Clock className="mr-2 h-4 w-4 text-primary" />
                                {cls.time}
                            </div>
                            <div className="flex items-center text-sm text-gray-300">
                                <MapPin className="mr-2 h-4 w-4 text-primary" />
                                {cls.location}
                            </div>
                            <div className="flex items-center text-sm text-gray-300">
                                <Users className="mr-2 h-4 w-4 text-primary" />
                                {cls.capacity} Enrolled
                            </div>
                            <Button variant="outline" className="w-full mt-4 border-zinc-700 hover:bg-zinc-800 hover:text-white">
                                Manage Class
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
