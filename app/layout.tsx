import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../Components/shared/Header";
import PageTransitionProvider from "@/provider/PageTrasitionProvider";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="!scroll-smooth min-h-screen py-24  flex  flex-col items-center justify-between bg-black/[0.86] text-white overflow-x-hidden"
    >
      <body
        className={
          inter.className + "flex  flex-col items-center justify-between"
        }
      >
        <ActiveSectionContextProvider>
          <Header />
          <PageTransitionProvider>{children}</PageTransitionProvider>
          {/* <Footer /> */}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
