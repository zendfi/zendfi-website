"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import  Link  from "next/link";
import Image from "next/image"

export default function LoginPage() {
    const [loading, setLoading] = useState(false)

    const handleGoogleLogin = async () => {
        setLoading(true)

    }

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-50 via-white to-purple-50">
            <header className="border-b border-accent/10 bg-white/80 backdrop-blur-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
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
                    </div>
                </div>
            </header>
            <main className="flex items-center justify-between flex-1 lg:pr-14 px-4 lg:px-0">
                <Image src={"/images/sign-in.png"} alt="Sign-up" width={800} height={800} className="hidden lg:flex" />
                <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8 text-center border border-purple-100">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Welcome Back
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Sign in to access your <span className="text-accent font-semibold">ZendFi</span> dashboard.
                    </p>

                    <button
                        onClick={handleGoogleLogin}
                        disabled={loading}
                        className="flex items-center justify-center gap-3 w-full py-3 rounded-full border border-gray-300 bg-white text-gray-800 font-medium shadow-sm hover:bg-gray-50 transition-all"
                    >
                        {loading ? (
                            <Loader2 className="w-5 h-5 animate-spin text-accent/60" />
                        ) : (
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    fill="#4285F4"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="#FBBC05"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                />
                                <path
                                    fill="#EA4335"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                        )}
                        {loading ? "Signing in..." : "Continue with Google"}
                    </button>

                    <div className="mt-8 text-sm text-gray-500">
                        By continuing, you agree to our{" "}
                        <a href="/terms" className="text-accent/60 hover:underline">
                            Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="/privacy" className="text-accent/60 hover:underline">
                            Privacy Policy
                        </a>
                        .
                    </div>
                </div>
            </main>
        </div>
    )
}
