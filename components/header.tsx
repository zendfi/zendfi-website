"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, Zap, Lock, TrendingUp, Code, ExternalLink } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from 'next/image';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const solutions = [
  {
    title: "Payment Checkouts",
    href: "/solutions#checkouts",
    description: "Fast, secure payment gateways for your business.",
    icon: Zap,
  },
  {
    title: "Subscriptions",
    href: "/solutions#subscriptions",
    description: "Automate recurring billing and subscriptions.",
    icon: TrendingUp,
  },
  {
    title: "Requesting Bills",
    href: "/solutions#payouts",
    description: "Share links that accept crypto",
    icon: Lock,
  },
  {
    title: "Installation",
    href: "/solutions#installment",
    description: "Powerful APIs for seamless integration.",
    icon: Code,
  },
]

const developers = [
  {
    title: "Overview",
    href: "/developers",
    description: "what ZendFi does, and how to integrate it.",
  },
  {
    title: "Documentation",
    href: "/docs",
    description: "Complete guides to get started.",
  },
  {
    title: "API Reference",
    href: "/docs/api",
    description: "Detailed API endpoint documentation.",
  },
  {
    title: "SDKs & Libraries",
    href: "/docs/sdks",
    description: "Official SDKs for popular programming languages.",
  },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm'
          : 'bg-transparent'
        }`}
    >
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-12 p-4">
        <div className="flex h-10 lg:h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <NavigationMenu className='relative z-50'>
              <NavigationMenuList className='flex-wrap'>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/what-is-zendfi" className='text-slate-500'>
                      What's ZendFi
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-1 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {solutions.map((solution) => {
                        const Icon = solution.icon;
                        return (
                          <ListItem
                            key={solution.title}
                            title={solution.title}
                            href={solution.href}
                          >
                            {solution.description}
                          </ListItem>
                        );
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>Developers</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-1 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {developers.map((dev) => (
                        <ListItem
                          key={dev.title}
                          title={dev.title}
                          href={dev.href}
                        >
                          {dev.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/pricing" className='text-slate-500'>
                      Pricing
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/faqs" className='text-slate-500'>
                      FAQs
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link href="/sign-in" className="px-4 py-2 text-base font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200">
              Sign In
            </Link>
            <Link href="/signup">
              <Button
                variant="outline"
                size="lg"
                className="border-border max-w-60 transition-all duration-300 group bg-accent text-white cursor-pointer w-full sm:w-auto"
              >
                Get Started <ExternalLink className="w-3.5 h-3.5 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>

            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-200/50 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <MobileNavLink href="/what-is-zendfi" onClick={() => setIsOpen(false)}>What's Zendfi</MobileNavLink>
            <div className="px-4">
              <div className="font-semibold text-slate-600 mb-2">Solutions</div>
              <div className="space-y-1 ml-2">
                {solutions.map((solution) => (
                  <MobileNavLink key={solution.title} href={solution.href} onClick={() => setIsOpen(false)}>
                    {solution.title}
                  </MobileNavLink>
                ))}
              </div>
            </div>

            <div className="px-4">
              <div className="font-semibold text-slate-600 mb-2">Developers</div>
              <div className="space-y-1 ml-2">
                {developers.map((dev) => (
                  <MobileNavLink key={dev.title} href={dev.href} onClick={() => setIsOpen(false)}>
                    {dev.title}
                  </MobileNavLink>
                ))}
              </div>
            </div>

            <MobileNavLink href="/pricing" onClick={() => setIsOpen(false)}>Pricing</MobileNavLink>
            <MobileNavLink href="/faqs" onClick={() => setIsOpen(false)}>FAQs</MobileNavLink>

            <div className="pt-4 border-t border-slate-200/50 px-4 space-y-2">
              <Link href="/sign-in" onClick={() => setIsOpen(false)} className="w-full block text-center px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
                Sign In
              </Link>
              <Link href="/signup" onClick={() => setIsOpen(false)} className="w-full block text-center px-4 py-2 text-sm font-semibold text-white bg-accent/50 rounded-lg transition-all">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </motion.header>

  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild className='hover:bg-accent/10'>
        <Link href={href} className="group">
          <div className="text-sm font-semibold text-slate-600 transition-colors">
            {title}
          </div>
          <p className="text-slate-600 text-sm leading-snug line-clamp-2 group-hover:text-slate-700 transition-colors">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
    >
      {children}
    </Link>
  )
}