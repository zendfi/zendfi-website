import { DashHeader } from "./_components/DashHeader"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./_components/DashSider"

function DashboardLayout({ children }: { children: React.ReactNode }) {

    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
                <div className="flex items-center px-2 border-b">
                    <SidebarTrigger className="w-10 h-10"/>
                    <DashHeader />
                </div>
                {children}
            </main>
        </SidebarProvider>
    )
}

export default DashboardLayout