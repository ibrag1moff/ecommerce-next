// next
import type { Metadata } from "next";

// styles
import "./globals.css";

// font
import { Raleway } from "next/font/google";

// components
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Providers from "./providers";

const openSans = Raleway({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
    title: "FatimaShop",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={openSans.className}>
                <Providers>
                    <Nav />
                    <main>{children}</main>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
