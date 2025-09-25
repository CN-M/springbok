import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Springbok - Minimal State Management",
	description:
		"A minimal state management library inspired by Zustand. Simple, fast, and TypeScript-first.",
	generator: "v0.app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body
				className={`font-sans ${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Suspense fallback={null}>{children}</Suspense>
			</body>
		</html>
	);
}
