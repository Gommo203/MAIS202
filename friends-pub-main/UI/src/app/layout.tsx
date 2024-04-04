import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Friend&apos;s Pub",
	description: "Your favorite pub in at home",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="shortcut icon" href="/cocktail.png" />
				<title>Friend&apos;s Pub</title>
				<meta
					name="viewport"
					content="initial-scale=1, width=device-width, maximum-scale=1"
				/>
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
