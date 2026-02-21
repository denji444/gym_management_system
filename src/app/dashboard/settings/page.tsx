import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function SettingsPage() {
    return (
        <div className="space-y-8 max-w-4xl">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
                <p className="text-gray-400">Manage your account and system preferences.</p>
            </div>

            <Card className="bg-zinc-900 border-zinc-800 text-white">
                <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription className="text-gray-400">Update your personal details.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">First Name</label>
                            <Input defaultValue="Admin" className="bg-black border-zinc-700 text-white" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Last Name</label>
                            <Input defaultValue="User" className="bg-black border-zinc-700 text-white" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <Input defaultValue="admin@fitlifepro.com" className="bg-black border-zinc-700 text-white" />
                    </div>
                    <Button className="bg-primary text-black hover:bg-primary/90">Save Changes</Button>
                </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 text-white">
                <CardHeader>
                    <CardTitle>System Preferences</CardTitle>
                    <CardDescription className="text-gray-400">Configure global system settings.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-zinc-800 rounded-lg">
                        <div>
                            <h4 className="font-medium">Dark Mode</h4>
                            <p className="text-sm text-gray-400">System is locked to dark mode for aesthetics.</p>
                        </div>
                        <Button variant="outline" disabled className="text-gray-500">Enabled</Button>
                    </div>
                    <Button variant="destructive">Reset System Data</Button>
                </CardContent>
            </Card>
        </div>
    );
}
