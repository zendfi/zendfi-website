'use client';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function LoginForm() {


    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full space-y-8 text-center">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to your merchant account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Use your passkey to securely log in
                    </p>
                </div>
                <Link href="https://api.zendfi.tech/login">
                    <Button className='bg-accent'>
                        Continue
                    </Button>
                </Link>
            </div>
        </div>
    );
}