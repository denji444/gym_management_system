import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-black">
            <Sidebar />
            <main className="flex-1 overflow-y-auto bg-black p-8 text-white">
                {children}
            </main>
        </div>
    );
}
