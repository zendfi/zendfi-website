"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Image from "next/image"
import Link from "next/link"
import { Loader2 } from "lucide-react"
import RegisterForm from "@/components/widgets/registration-form"


export default function RegistrationPage() {
  return (
    <main className="min-h-screen">
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

      <div className="flex items-center justify-between min-h-[calc(100vh-64px)] py-12 px-4 flex-wrap">
        <Image src={"/images/Sign-up.png"} alt="Sign-up" width={800} height={800} className="hidden lg:flex" />
        <div className="w-full max-w-2xl flex flex-col justify-center items-center">
          <RegisterForm />
        </div>
      </div>
    </main>
  )
}