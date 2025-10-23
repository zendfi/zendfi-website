import { AdminSidebar } from "@/app/(admin)/_components/AdminSider"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AdminSidebar />
            <main className="w-full">
                <div className="flex items-center p-4 border-b">
                    <SidebarTrigger className="text-accent" />
                    <div className="flex items-center gap-2">
                        <h1 className="font-semibold text-base text-accent">Admin Panel</h1>
                    </div>
                </div>
                {children}
            </main>
        </SidebarProvider>
    )
}
