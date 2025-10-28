"use client"

import { LogIn, Shield, ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import AdminLoginForm from "@/components/widgets/admin-login-form"

const AdminSignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-accent/10 via-white to-accent/5 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl border p-8 md:p-10 flex flex-col items-center text-center space-y-6">
        {/* Logo / Header */}
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center gap-2 text-accent">
            <Shield size={28} />
            <h1 className="text-2xl font-bold">ZendFi Admin</h1>
          </div>
          <p className="text-sm text-muted-foreground">
            Secure access for authorized administrators
          </p>
        </div>
        <AdminLoginForm />
      </div>
    </div>
  )
}

export default AdminSignIn
