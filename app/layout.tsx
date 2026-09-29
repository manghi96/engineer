import type { Metadata } from "next";
import CustomCursor from "@/components/CustomCursor";
import { LanguageProvider } from "@/components/LanguageProvider";
import PageLoader from "@/components/PageLoader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nghia Tran",
  description:
    "Portfolio of Tran Minh Nghia — BIM Plumbing Modeler graduate from Ton Duc Thang University. Experienced in BIM modeling, Design & Calculation, and Documentation.",
  openGraph: {
    title: "Tran Minh Nghia",
    description: "BIM Plumbing Modeler | Ho Chi Minh City",
    type: "website",
  },
  icons: {
    icon: [
      { url: "favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#FAFAF7] text-[#0F0F0E] antialiased">
        <LanguageProvider>
          <PageLoader />
          {children}
          <CustomCursor />
        </LanguageProvider>
      </body>
    </html>
  );
}
