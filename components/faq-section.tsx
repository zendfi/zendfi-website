"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is Zendfi?",
    answer:
      "Zendfi is a fintech platform that aimed at providing fast, affordable money transfers between the US/UK and Nigeria. We use a combination of instant banking rails and stablecoin technology to deliver transfers in under 15 minutes.",
  },
  {
    question: "Who is Zendfi for?",
    answer:
      "Zendfi serves Nigerian diaspora in the US/UK, US/UK businesses with Nigerian operations, and Nigerian SMEs receiving payments from US clients. We offer both individual and business accounts.",
  },
  {
    question: "How does Zendfi work?",
    answer:
      "Zendfi connects to your US/UK bank account, instantly converts your dollars/pounds to stablecoins, then converts to Nigerian Naira and deposits directly to the recipient's Nigerian bank account — all in under 15 minutes.",
  },
  {
    question: "What makes Zendfi different?",
    answer:
      "Speed and intelligence. While other services take hours or days, Zendfi guarantees under 15 minutes. Our smart routing powered by AI automatically optimizes each transfer for the fastest, cheapest route without any manual intervention.",
  },
  {
    question: "Is Zendfi safe and regulated?",
    answer:
      "Yes. We partner with regulated banking providers (like Unit and Modulr), licensed stablecoin providers (Circle), and SEC-licensed Nigerian exchanges (Quidax). All transfers are fully compliant with US, UK and Nigerian regulations.",
  },
  {
    question: "What does Zendfi cost?",
    answer:
      "Our fees start at 1.5% for transfers, with no hidden charges. This is up to 75% cheaper than traditional services like Western Union, and competitive with other digital providers while being significantly faster.",
  },
  {
    question: "What are the transfer limits?",
    answer:
      "Individual accounts: Up to $10,000 per transfer, $25,000 per month \n Business accounts: Custom limits based on your needs and compliance requirements",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-slate-900 mb-4">FAQs</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-slate-200 overflow-hidden"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 flex items-center justify-between text-left transition-all duration-200 ease-out"
              >
                <h3 className="text-lg font-semibold text-slate-900 pr-8">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-slate-600 transition-all duration-200 ease-out flex-shrink-0 ${
                    openIndex === index ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-250 ease-out overflow-hidden ${
                  openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-6 pr-8 transform transition-transform duration-150 ease-out">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
