import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center text-center px-4 py-16 mt-20">
        <h1 className="text-6xl md:text-8xl font-extrabold text-accent mb-4 animate-pulse">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
          Oops! Page not found.
        </h2>
        <p className="text-muted-foreground max-w-md mb-8">
          The page you’re looking for might have been moved, deleted, or never existed.  
        </p>

        <Link href="/" className="flex items-center gap-2">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white transition-transform duration-200 hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go back home
          </Button>
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
