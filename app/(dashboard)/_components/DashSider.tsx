import { Calendar, Home, Inbox, LogOut, Search, Settings } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

// Menu items.
const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "Inbox",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/images/logo.png"
                                alt="Zendfi Logo"
                                width={120}
                                height={32}
                                className="h-8 w-auto filter hue-rotate-[19deg] brightness-110"
                                priority
                            />
                        </Link>
                    </SidebarGroupLabel>
                    <SidebarGroupContent className="mt-10">
                        <SidebarMenu className="space-y-4">
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
                    <Button variant="outline" className="mt-auto border-gray-300 text-gray-700 hover:text-accent hover:border-accent m-2">
                        <LogOut size={16} className="mr-2" /> Log out
                    </Button>
        </Sidebar>
    )
}