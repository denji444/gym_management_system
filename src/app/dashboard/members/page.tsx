import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

const members = [
    {
        id: "M001",
        name: "Alex Johnson",
        email: "alex.j@example.com",
        plan: "Titan",
        status: "Active",
        joinDate: "2023-11-15",
    },
    {
        id: "M002",
        name: "Sarah Williams",
        email: "s.williams@example.com",
        plan: "Warrior",
        status: "Active",
        joinDate: "2024-01-10",
    },
    {
        id: "M003",
        name: "Michael Brown",
        email: "mbrown@example.com",
        plan: "Initiate",
        status: "Inactive",
        joinDate: "2023-08-22",
    },
    {
        id: "M004",
        name: "Emily Davis",
        email: "emily.d@example.com",
        plan: "Titan",
        status: "Active",
        joinDate: "2024-02-01",
    },
    {
        id: "M005",
        name: "Chris Wilson",
        email: "chris.w@example.com",
        plan: "Warrior",
        status: "Pending",
        joinDate: "2024-02-14",
    },
];

export default function MembersPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Members</h2>
                    <p className="text-gray-400">Manage your gym members and their subscriptions.</p>
                </div>
                <Button className="bg-primary text-black hover:bg-primary/90">
                    <Plus className="mr-2 h-4 w-4" /> Add Member
                </Button>
            </div>

            <div className="flex items-center gap-4">
                <Input placeholder="Search members..." className="max-w-sm bg-zinc-900 border-zinc-800 text-white" />
            </div>

            <div className="rounded-md border border-zinc-800 bg-zinc-900">
                <Table>
                    <TableHeader>
                        <TableRow className="border-zinc-800 hover:bg-zinc-800/50">
                            <TableHead className="text-gray-400">ID</TableHead>
                            <TableHead className="text-gray-400">Name</TableHead>
                            <TableHead className="text-gray-400">Email</TableHead>
                            <TableHead className="text-gray-400">Plan</TableHead>
                            <TableHead className="text-gray-400">Status</TableHead>
                            <TableHead className="text-gray-400">Join Date</TableHead>
                            <TableHead className="text-right text-gray-400">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {members.map((member) => (
                            <TableRow key={member.id} className="border-zinc-800 hover:bg-zinc-800/50">
                                <TableCell className="font-medium text-white">{member.id}</TableCell>
                                <TableCell className="text-gray-300">{member.name}</TableCell>
                                <TableCell className="text-gray-300">{member.email}</TableCell>
                                <TableCell>
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium 
                        ${member.plan === 'Titan' ? 'bg-purple-500/10 text-purple-500' :
                                            member.plan === 'Warrior' ? 'bg-blue-500/10 text-blue-500' :
                                                'bg-gray-500/10 text-gray-500'}`}>
                                        {member.plan}
                                    </span>
                                </TableCell>
                                <TableCell>
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium 
                        ${member.status === 'Active' ? 'bg-green-500/10 text-green-500' :
                                            member.status === 'Inactive' ? 'bg-red-500/10 text-red-500' :
                                                'bg-yellow-500/10 text-yellow-500'}`}>
                                        {member.status}
                                    </span>
                                </TableCell>
                                <TableCell className="text-gray-300">{member.joinDate}</TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">Edit</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
