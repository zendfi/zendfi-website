"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ScheduleDemoButton() {
  // Calculate a date at least 2 days from now
  const now = new Date()
  const start = new Date(now)
  start.setDate(start.getDate() + 2)
  start.setHours(10, 0, 0) // 10:00 AM

  const end = new Date(start)
  end.setHours(start.getHours() + 1) // 1-hour meeting

  const formatDate = (date: Date) => {
    return date.toISOString().replace(/-|:|\.\d\d\d/g, "")
  }

  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=ZendFi+Demo+Meeting&dates=${formatDate(start)}/${formatDate(end)}&add=hello@zendfi.tech&details=Book+a+Google+Meet+with+the+ZendFi+team.&location=Google+Meet&sf=true&output=xml`

  return (
    <Link href={calendarUrl} target="_blank">
      <Button
        size="lg"
        className="bg-accent max-w-60 text-primary-foreground hover:bg-accent/90 hover:shadow-primary/20 transition-all duration-300 w-full sm:w-auto"
      >
        Schedule a Demo
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </Button>
    </Link>
  )
}
