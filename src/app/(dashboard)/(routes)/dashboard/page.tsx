"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { ArrowRight, Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
    {
        label: "Mensagem",
        icon: MessageSquare,
        color: "text-indigo-600",
        bgColor: "bg-indigo-600/10",
        href: "/conversation"
    },
    {
        label: "Imagem",
        icon: ImageIcon,
        color: "text-sky-600",
        bgColor: "bg-sky-600/10",
        href: "/image"
    },
    {
        label: "Video",
        icon: VideoIcon,
        color: "text-orange-600",
        bgColor: "bg-orange-600/10",
        href: "/video"
    },
    {
        label: "Música",
        icon: Music,
        color: "text-rose-600",
        bgColor: "bg-rose-600/10",
        href: "/music"
    },
    {
        label: "Código",
        icon: Code,
        color: "text-teal-600",
        bgColor: "bg-teal-600/10",
        href: "/code"
    },
]

const DashboardPage = () => {

    const router = useRouter();

    return (
        <div>
            <div className="mb-8 space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold text-center">
                    Explore o poder da Inteligência Artificial
                </h2>
                <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
                    Chat com a IA mais inteligente - Experimente o poder da IA
                </p>
            </div>
            <div className="px-4 md:px-20 lg:px-32 space-y-4">
                {tools.map((tool) => (
                    <Card
                        onClick={() => router.push(tool.href)}
                        key={tool.href}
                        className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
                    >
                        <div className="flex items-center gap-x-4">
                            <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                                <tool.icon className={cn("w-8 h-8", tool.color)} />
                            </div>
                            <div className="font-semibold">
                                {tool.label}
                            </div>
                        </div>
                        <ArrowRight className="w-5 h-5" />
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default DashboardPage;
