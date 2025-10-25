"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import  Link  from "next/link";
import Image from "next/image"
import LoginForm from "@/components/widgets/login-form";

export default function LoginPage() {
    const [loading, setLoading] = useState(false)

    const handleGoogleLogin = async () => {
        setLoading(true)

    }

    return (
        <div className="min-h-screen flex flex-col">
                        <Link href="/" className="flex items-center absolute left-5 top-5">
                            <Image
                                src="/images/logo.png"
                                alt="Zendfi Logo"
                                width={120}
                                height={32}
                                className="h-8 w-auto filter hue-rotate-[19deg] brightness-110"
                                priority
                            />
                        </Link>
            <main className="flex items-center justify-between flex-1 lg:pr-14 px-4 lg:px-0 flex-wrap">
                <Image src={"/images/sign-in.png"} alt="Sign-up" width={800} height={800} className="hidden lg:flex flex-1" />
                <LoginForm />
            </main>
        </div>
    )
}
