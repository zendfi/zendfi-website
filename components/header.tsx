"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, Zap, Lock, TrendingUp, Code, ArrowRight, ExternalLink } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { ThemeToggle } from './theme-toggle';
import { useIsMobile } from '@/hooks/use-mobile';

const solutions = [
  {
    title: "Payment Checkouts",
    href: "/solutions#checkouts",
    description: "Fast, secure payment gateways for your business.",
    icon: Zap,
  },
  {
    title: "Advanced Options",
    href: "/solutions#advanced",
    description: "Do much more with our flexible payment options.",
    icon: TrendingUp,
  },
  {
    title: "NGN Onramp",
    href: "/solutions#onramp",
    description: "Seamless onramp for Nigerian customers with local payment methods.",
    icon: Lock,
  },
  {
    title: "Instant Settlements",
    href: "/solutions#settlement",
    description: "Get your funds instantly with our fast settlement options.",
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
    href: "/docs/intro",
    description: "Detailed API endpoint documentation.",
  },
  {
    title: "SDKs & Libraries",
    href: "/docs/developer-tools/sdks",
    description: "Official SDKs for popular programming languages.",
  },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
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
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-transparent/80 backdrop-blur-xl border-b border-border/50 dark:border-white/10 shadow-sm'
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
                className="h-8 w-auto filter hue-rotate-[19deg] dark:hue-rotate-[13deg] brightness-110"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <NavigationMenu className='relative z-50'>
              <NavigationMenuList className='flex-wrap'>
                {/* <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/what-is-zendfi" className='text-slate-500 dark:text-gray-200/95 dark:hover:text-accent'>
                      What's ZendFi
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem> */}
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
                    <Link href="/pricing" className='text-slate-500 dark:text-gray-200/95 dark:hover:text-accent'>
                      Pricing
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* <ThemeToggle /> */}
            {/* <Link href="/sign-in" className="px-4 py-2 text-base font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200">
              Sign In
            </Link> */}
            <Link href="https://dashboard.zendfi.tech/login" target="_blank" rel="noopener noreferrer">
               <Button
                variant="outline"
                size="lg"
                className="border-border max-w-60 transition-all duration-300 group bg-accent dark:bg-accent text-white cursor-pointer w-full sm:w-auto"
              >
                Get Started <ExternalLink className="w-3.5 h-3.5 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
             {/* <div className="w-full sm:w-auto border-2 border-foreground bg-background p-1 zendfi-hard-shadow hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200">
            </div> */}
            </Link>
          </div>

          {/* Mobile Menu Sheet */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button
                className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                aria-label="Toggle navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:w-full h-auto p-0 overflow-y-scroll bg-white dark:bg-black">
              <SheetHeader className="px-6 py-8 border-b border-slate-200 dark:border-slate-800">
                <SheetTitle className="text-left">
                  <Image
                    src="/images/logo.png"
                    alt="Zendfi Logo"
                    width={120}
                    height={32}
                    className="h-8 w-auto filter hue-rotate-[19deg] brightness-110"
                    priority
                  />
                </SheetTitle>
              </SheetHeader>

              <nav className="px-6 py-6 space-y-6">
                {/* <div className='text-semibold'>
                  <MobileNavLink href="/what-is-zendfi" onClick={() => setIsOpen(false)}>What's Zendfi</MobileNavLink>
                </div> */}

                <div>
                  <div className="font-semibold text-slate-600 dark:text-gray-200/95 mb-3">Solutions</div>
                  <div className="space-y-2">
                    {solutions.map((solution) => (
                      <MobileNavLink key={solution.title} href={solution.href} onClick={() => setIsOpen(false)}>
                        {solution.title}
                      </MobileNavLink>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="font-semibold text-slate-600 dark:text-gray-200/95 mb-3">Developers</div>
                  <div className="space-y-2">
                    {developers.map((dev) => (
                      <MobileNavLink key={dev.title} href={dev.href} onClick={() => setIsOpen(false)}>
                        {dev.title}
                      </MobileNavLink>
                    ))}
                  </div>
                </div>

                <MobileNavLink href="/pricing" onClick={() => setIsOpen(false)}>Pricing</MobileNavLink>
              </nav>

              <div className="px-6 pb-8 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
                  {/* <Link href="/sign-in" onClick={() => setIsOpen(false)} className="block text-center px-4 py-3 text-base font-medium text-white dark:text-gray-200/95 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-xl transition-colors">
                    Sign In
                  </Link> */}
                <Link href="https://dashboard.zendfi.tech/login" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="block text-center px-4 py-3 text-base font-semibold text-white bg-accent rounded-xl transition-all">
                  Get Started
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
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
          <div className="text-sm font-semibold text-slate-600 dark:text-gray-200/95 transition-colors">
            {title}
          </div>
          <p className="text-slate-600 text-sm leading-snug line-clamp-2 dark:text-gray-500/95 group-hover:text-slate-700 transition-colors">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  const isMobile = useIsMobile();
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block px-3 py-2 text-sm font-medium text-slate-600 ${isMobile && "dark:text-gray-600/95"} dark:text-gray-200/95 hover:text-slate-900 dark:hover:text-accent-foreground hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg transition-colors`}
    >
      {children}
    </Link>
  )
}