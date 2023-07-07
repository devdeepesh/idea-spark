import { Header } from "@/components";
import "./globals.css";
import { Inter } from "next/font/google";
import StateProvider from "@/state/StateProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Idea Spark",
    description: "Generated by Idea Spark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <StateProvider>
                    <Header />
                    <main id="main" className="py-2">
                        {children}
                    </main>
                </StateProvider>
            </body>
        </html>
    );
}
