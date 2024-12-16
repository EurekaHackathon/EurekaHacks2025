import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { cn } from "@/lib/utils";

import "./globals.css";

export const metadata: Metadata = {
    title: "EurekaHACKS 2025",
    description: "EurekaHACKS is Abbey Park High School's annual hackathon. Hours of coding, mentorship & fun (+ free food!)",
    openGraph: {
        title: "EurekaHACKS 2025",
        type: "website",
        url: "https://eurekahacks.ca",
        images: [
            {
                url: "https://imgur.com/Ami0K1E",
            },
        ],
        description: "EurekaHACKS is Abbey Park High School's annual hackathon. Hours of coding, mentorship & fun (+ free food!)",
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(GeistSans.className, GeistMono.className)}
            >
                {children}
            </body>
        </html>
    );
}
