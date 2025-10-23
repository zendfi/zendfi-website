import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Suspense, lazy } from "react"

const FAQSection = lazy(() => import("@/components/faq-section").then((m) => ({ default: m.FAQSection })))
function SectionSkeleton() {
    return <div className="h-96 bg-muted/20 animate-pulse rounded-lg mx-4 my-8" />
}
const FAQs = () => {
    return (
        <main className="min-h-screen">
            <Header />
            <Suspense fallback={<SectionSkeleton />}>
                <FAQSection />
            </Suspense>
            <Footer />
        </main>
    )
}
export default FAQs;