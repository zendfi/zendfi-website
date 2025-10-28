"use client";
import { LogOut, Users, CreditCard, BarChart3, Settings } from "lucide-react"
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
import { useAdminAuth } from "@/hooks/use-admin-auth"

// Menu items.
const items = [
    {
        title: "Overview",
        url: "/admin/overview",
        icon: BarChart3,
    },
    {
        title: "Users",
        url: "/admin/users",
        icon: Users,
    },
    {
        title: "Transactions",
        url: "/admin/transactions",
        icon: CreditCard,
    },
    {
        title: "Logs",
        url: "/admin/logs",
        icon: Settings,
    },
]

export function AdminSidebar() {
    const { logout } = useAdminAuth();
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
            <Button
                onClick={() => logout()}
                variant="outline"
                className="mt-auto border-gray-300 text-gray-700 hover:text-accent hover:border-accent m-2"
            >
                <LogOut size={16} className="mr-2" /> Log out
            </Button>
        </Sidebar>
    )
}