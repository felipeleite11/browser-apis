import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from 'react-hot-toast'
import { toastConfig } from '../config/toast'
import '../config/notification'

import "./globals.css";
import Head from "next/head";
import Script from "next/script";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Browser APISs",
	description: "Browser APIs",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
			<Head>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.5.1/leaflet.css" />
				<Script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.5.1/leaflet.js" />
				{/* <Script src="https://unpkg.com/react-leaflet@2.4.0/dist/react-leaflet.js" /> */}
			</Head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<main className="p-12 flex flex-col gap-8">
					<h1 className="text-lg font-bold">BROWSER API'S DEMO</h1>

					{children}
				</main>

				<Toaster
					position="bottom-right"
					toastOptions={toastConfig}
				/>
			</body>
		</html>
	);
}
