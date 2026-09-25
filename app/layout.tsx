import type { Metadata } from "next";
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
      <body className="bg-[#FAFAF7] text-[#0F0F0E] antialiased">{children}</body>
    </html>
  );
}
