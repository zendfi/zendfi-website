"use client"

import Image from "next/image"
import Link from "next/link"
import RegisterForm from "@/components/widgets/registration-form"

export default function RegistrationPage() {
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
          src="/images/Sign-up.png"
          alt="Sign Up"
          fill
          className="object-cover object-center"
          priority={false}
          loading="lazy"
          sizes="(max-width: 1024px) 0px, 50vw"
          quality={70}
        />
      </div>

      {/* Form section */}
      <main className="flex flex-1 items-center justify-center w-full px-6 sm:px-10 lg:px-0">
        <div className="w-full max-w-md">
          <RegisterForm />
        </div>
      </main>
    </div>
  )
}
