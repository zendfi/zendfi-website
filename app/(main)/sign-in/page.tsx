"use client"

import Link from "next/link"
import Image from "next/image"
import LoginForm from "@/components/widgets/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative">
      {/* Logo */}
      <Link
        href="/"
        className="absolute left-5 top-5 z-20 flex items-center"
      >
        <Image
          src="/images/logo.png"
          alt="Zendfi Logo"
          width={120}
          height={32}
          className="h-8 w-auto filter hue-rotate-[19deg] brightness-110"
          priority
        />
      </Link>

      {/* Image section */}
      <div className="hidden lg:block relative w-1/2 h-screen">
        <Image
          src="/images/sign-in.png"
          alt="Sign In"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Form section */}
      <main className="flex flex-1 items-center justify-center w-full px-6 sm:px-10 lg:px-0">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </main>
    </div>
  )
}
