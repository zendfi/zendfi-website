"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Markdown from "markdown-to-jsx"
import { Input } from "@/components/ui/input"
import { Send, Bot, Loader2 } from "lucide-react"
import { GoogleGenerativeAI } from "@google/generative-ai" // npm install @google/generative-ai
import { docData } from "@/lib/doc-json"

// Types
interface Message {
    id: string
    role: "user" | "assistant"
    content: string
    timestamp: Date
}

interface DocsChatProps {
    docsData: any[]
}

// Gemini API Key - Replace with your actual key or use env var
const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || ""

// Initialize Gemini (only if key is provided)
const genAI = GEMINI_API_KEY ? new GoogleGenerativeAI(GEMINI_API_KEY) : null
const model = genAI ? genAI.getGenerativeModel({ model: "gemini-2.5-flash" }) : null // Updated to current model

export function DocsChat({ docsData }: DocsChatProps) {
    const [messages, setMessages] = useState<Message[]>([])
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    // Scroll to bottom
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    // Extract full docs text for context (no Fuse)
    const getFullDocsContext = (): string => {
        let fullText = "ZendFi Documentation Full Context:\n\n"
        const extractText = (obj: any): string => {
            let text = ""
            if (typeof obj === "string") return obj + "\n"
            if (Array.isArray(obj)) return obj.map(extractText).join("\n")
            if (typeof obj === "object" && obj !== null) {
                Object.entries(obj).forEach(([key, val]) => {
                    text += `${key.toUpperCase()}:\n${extractText(val)}\n\n`
                })
            }
            return text.trim()
        }

        docsData.forEach((doc, index) => {
            fullText += `DOCUMENT ${index + 1}: ${doc.title}\n`
            fullText += extractText(doc) + "\n\n"
        })

        return fullText
    }

    // Handle chat submission
    const handleSubmit = async () => {
        if (!input.trim() || isLoading || !model) return

        const userMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content: input,
            timestamp: new Date()
        }

        setMessages(prev => [...prev, userMessage])
        setInput("")
        setIsLoading(true)

        try {
            const fullContext = getFullDocsContext()

            // Prompt for Gemini with full docs context
            const prompt = `
You are a helpful assistant for ZendFi documentation. Answer the user's question based ONLY on the provided docs context below. Do not generate new content or speculate—stick strictly to the docs. If the answer isn't covered, say: "Based on the available ZendFi docs, I don't have specific information on that. Try asking about payments, webhooks, subscriptions, or wallet setup."

Full Docs Context:
${fullContext}

User Question: ${input}

Respond concisely with references to relevant sections, endpoints, or steps. Use bullet points for lists and keep it under 300 words.
`

            const result = await model.generateContent(prompt)
            const response = await result.response
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: response.text(),
                timestamp: new Date()
            }

            setMessages(prev => [...prev, botMessage])
        } catch (error) {
            console.error("Gemini API error:", error)
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: "Sorry, I encountered an error processing your question. Please check your API key and try again!",
                timestamp: new Date()
            }
            setMessages(prev => [...prev, errorMessage])
        } finally {
            setIsLoading(false)
        }
    }

    // Handle Enter key in input (Enter to submit)
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault()
            handleSubmit()
        }
    }

    // Handle Send button click
    const handleSendClick = (e: React.MouseEvent) => {
        e.preventDefault()
        handleSubmit()
    }

    return (
        <div className="flex flex-col h-full">
            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {messages.length === 0 ? (
                    <div className="text-center text-muted-foreground py-8">
                        <Bot className="mx-auto h-12 w-12 mb-4 opacity-50" />
                        <p>Ask me anything about ZendFi docs—like "How do I create a payment?"</p>
                    </div>
                ) : (
                    messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                            <div
                                className={`max-w-[80%] p-3 rounded-lg ${message.role === "user"
                                    ? "bg-accent/70 text-primary-foreground"
                                    : "bg-muted text-foreground"
                                    }`}
                            >
                                <Markdown
                                    options={{
                                        forceBlock: true,
                                        overrides: {
                                            strong: {
                                                component: (props) => (
                                                    <strong className="font-semibold text-primary">{props.children}</strong>
                                                ),
                                            },
                                            code: {
                                                component: ({ className, children }) => {
                                                    const language = className?.replace("lang-", "") || ""
                                                    const isInline = !/\n/.test(children)
                                                    return isInline ? (
                                                        <code className="bg-muted px-1 py-0.5 rounded text-primary font-mono text-xs">
                                                            {children}
                                                        </code>
                                                    ) : (
                                                        <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm my-3 shadow-sm">
                                                            <code className={`language-${language}`}>{children}</code>
                                                        </pre>
                                                    )
                                                },
                                            },
                                            li: {
                                                component: (props) => (
                                                    <li className="ml-4 list-disc leading-relaxed">{props.children}</li>
                                                ),
                                            },
                                            a: {
                                                component: (props) => (
                                                    <a
                                                        {...props}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-500 hover:underline"
                                                    >
                                                        {props.children}
                                                    </a>
                                                ),
                                            },
                                            p: {
                                                component: (props) => (
                                                    <p className="mb-3 leading-relaxed">{props.children}</p>
                                                ),
                                            },
                                        },
                                    }}
                                    className="text-sm prose prose-sm dark:prose-invert max-w-none"
                                >
                                    {message.content}
                                </Markdown>


                                <span className={`text-xs block mt-1 ${message.role === "user"
                                    ? "text-white"
                                    : "text-muted-foreground"
                                    }`}>
                                    {message.timestamp.toLocaleTimeString()}
                                </span>
                            </div>
                        </div>
                    ))
                )}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-muted text-foreground p-3 rounded-lg max-w-[80%]">
                            <div className="flex items-center gap-2">
                                <Loader2 className="w-4 h-4 animate-spin" />
                                <p className="text-sm">Thinking...</p>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t bg-background">
                <div className="flex gap-2">
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Ask ZendFi bot"
                        className="flex-1"
                        disabled={isLoading}
                    />
                    <Button
                        onClick={handleSendClick}
                        disabled={!input.trim() || isLoading}
                        variant="outline"
                    >
                        <Send className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    )
}