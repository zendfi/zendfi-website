"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Play, Clock, Eye } from "lucide-react";
import Link from "next/link";
import { ScheduleDemoButton } from "@/components/schedule-demo";

interface VideoDemo {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    duration: string;
    views: string;
    shareUrl: string;
    embedUrl: string;
    category: "setup" | "integration" | "features" | "advanced";
}

const videoIds = [
    {
        id: "1",
        shareId: "2aa13bb80264470bb4895cc440fe292d",
        category: "setup" as const,
        fallback: {
            title: "Getting Started with ZendFi",
            description: "Learn how to set up your first ZendFi merchant account and integrate the SDK.",
        }
    },
    {
        id: "2",
        shareId: "3320ef6ebc18487193635abb46c5ea16",
        category: "integration" as const,
        fallback: {
            title: "Accepting Your First Payment",
            description: "A step-by-step walkthrough of implementing a complete payment flow.",
        }
    },
];

async function fetchLoomMetadata(shareId: string) {
    try {
        const response = await fetch(
            `https://www.loom.com/v1/oembed?url=https://www.loom.com/share/${shareId}`
        );

        if (response.ok) {
            const data = await response.json();
            return {
                title: data.title || "",
                description: data.provider_name || "Loom Video",
                thumbnail: data.thumbnail_url || "",
                duration: data.duration ? `${Math.floor(data.duration / 60)}:${String(Math.floor(data.duration % 60)).padStart(2, "0")}` : "N/A",
            };
        }
    } catch (error) {
        console.log("Could not fetch Loom metadata:", error);
    }
    return null;
}

const categories = ["all", "setup", "integration", "features", "advanced"] as const;

export default function DemosPage() {
    const [demos, setDemos] = useState<VideoDemo[]>([]);
    const [selectedVideo, setSelectedVideo] = useState<VideoDemo | null>(null);
    const [activeCategory, setActiveCategory] = useState<typeof categories[number]>("all");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadVideos() {
            const loadedDemos: VideoDemo[] = [];

            for (const video of videoIds) {
                const metadata = await fetchLoomMetadata(video.shareId);

                const demo: VideoDemo = {
                    id: video.id,
                    title: metadata?.title || video.fallback.title,
                    description: metadata?.description || video.fallback.description,
                    thumbnail: metadata?.thumbnail || "",
                    duration: metadata?.duration || "0:00",
                    views: "0",
                    shareUrl: `https://www.loom.com/share/${video.shareId}`,
                    embedUrl: `https://www.loom.com/embed/${video.shareId}`,
                    category: video.category,
                };

                loadedDemos.push(demo);
            }

            setDemos(loadedDemos);
            if (loadedDemos.length > 0) {
                setSelectedVideo(loadedDemos[0]);
            }
            setLoading(false);
        }

        loadVideos();
    }, []);

    const filteredDemos = activeCategory === "all" ? demos : demos.filter((d) => d.category === activeCategory);

    const categoryLabels: Record<string, string> = {
        all: "All Demos",
        setup: "Setup",
        integration: "Integration",
        features: "Features",
        advanced: "Advanced",
    };

    if (loading) {
        return (
            <>
                <Header />
                <main className="min-h-screen bg-background flex items-center justify-center">
                    <div className="text-center">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
                        <p className="mt-4 text-muted-foreground">Loading videos...</p>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />

            <main className="min-h-screen bg-background">
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 mt-10">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold mb-3 text-foreground">
                            Video Demos & Tutorials
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Watch step-by-step guides to integrate ZendFi, set up payments, and explore advanced features.
                        </p>
                    </motion.div>

                    {selectedVideo && (
                        <div className="grid lg:grid-cols-3 gap-8 mb-12">
                            <motion.div
                                className="lg:col-span-2"
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                            >
                                <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
                                    <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 relative group flex items-center justify-center">
                                        {selectedVideo.thumbnail && (
                                            <img
                                                src={selectedVideo.thumbnail}
                                                alt={selectedVideo.title}
                                                className="w-full h-full object-cover"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg"
                                                onClick={() => window.open(selectedVideo.shareUrl, "_blank")}
                                            >
                                                <Play className="w-8 h-8 text-white fill-white ml-1" />
                                            </motion.button>
                                        </div>

                                        <div className="absolute bottom-4 right-4 bg-black/80 px-2 py-1 rounded text-white text-sm font-medium flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {selectedVideo.duration}
                                        </div>
                                    </div>

                                    <div className="bg-slate-950 p-6">
                                        <h2 className="text-xl md:text-2xl font-bold text-white mb-3">{selectedVideo.title}</h2>
                                        <p className="text-slate-300 mb-4">{selectedVideo.description}</p>

                                        <div className="flex items-center gap-4 text-slate-400 text-sm">
                                            <div className="flex items-center gap-1">
                                                <Eye className="w-4 h-4" />
                                                {selectedVideo.views} views
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {selectedVideo.duration}
                                            </div>
                                        </div>

                                        <motion.div whileHover={{ y: -2 }} className="mt-6">
                                            <Button
                                                onClick={() => window.open(selectedVideo.shareUrl, "_blank")}
                                                className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3"
                                            >
                                                <Play className="w-4 h-4 mr-2" />
                                                Watch Full Video
                                            </Button>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="lg:col-span-1"
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                            >
                                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 sticky top-24">
                                    <h3 className="font-bold text-lg mb-4 text-foreground">Categories</h3>
                                    <div className="space-y-2">
                                        {categories.map((cat) => (
                                            <motion.button
                                                key={cat}
                                                onClick={() => setActiveCategory(cat)}
                                                whileHover={{ x: 4 }}
                                                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${activeCategory === cat
                                                        ? "bg-accent text-white"
                                                        : "bg-transparent text-foreground hover:bg-slate-200 dark:hover:bg-slate-800"
                                                    }`}
                                            >
                                                {categoryLabels[cat]}
                                            </motion.button>
                                        ))}
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                                        <p className="text-sm text-muted-foreground mb-4">Need personalized help?</p>
                                        <ScheduleDemoButton />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}

                    <motion.div
                        className="mt-16"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-8 text-foreground">
                            {categoryLabels[activeCategory]}
                        </h3>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredDemos.map((demo, idx) => (
                                <motion.div
                                    key={demo.id}
                                    onClick={() => setSelectedVideo(demo)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: idx * 0.05 }}
                                    whileHover={{ y: -8 }}
                                    className={`group cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${selectedVideo?.id === demo.id
                                            ? "ring-2 ring-accent shadow-lg"
                                            : "hover:shadow-lg"
                                        }`}
                                >
                                    <div className="relative aspect-video bg-gradient-to-br from-accent/20 to-accent/5 overflow-hidden flex items-center justify-center">
                                        {demo.thumbnail && (
                                            <img
                                                src={demo.thumbnail}
                                                alt={demo.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                                            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                                            </div>
                                        </div>

                                        <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-white text-xs font-medium">
                                            {demo.duration}
                                        </div>
                                    </div>

                                    <div className="bg-slate-50 dark:bg-slate-900 p-4 h-full flex-1">
                                        <Link href={demo.shareUrl} target="_blank" className="no-underline">
                                            <h4 className="font-semibold text-foreground line-clamp-2 mb-2 group-hover:text-accent transition-colors">
                                                {demo.title}
                                            </h4>
                                        </Link>
                                        <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                                            {demo.description}
                                        </p>
                                        <div className="flex items-center text-xs text-muted-foreground gap-2">
                                            <Eye className="w-3 h-3" />
                                            {demo.views} views
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.section
                        className="mt-20 max-w-3xl"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-8 text-foreground">FAQ</h2>
                        <div className="space-y-4">
                            {[
                                {
                                    q: "Can I use these videos offline?",
                                    a: "Yes! Download videos directly from Loom for offline viewing.",
                                },
                                {
                                    q: "Are there timestamps in the videos?",
                                    a: "Absolutely. Each video has chapter markers in the description for quick navigation.",
                                },
                                {
                                    q: "What if I need more detailed documentation?",
                                    a: "Check out our comprehensive docs at /docs for API references and code examples.",
                                },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800"
                                >
                                    <h4 className="font-semibold text-foreground mb-2">{item.q}</h4>
                                    <p className="text-muted-foreground">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>
                </section>
            </main>

            <Footer />
        </>
    );
}
