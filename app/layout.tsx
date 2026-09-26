import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SolveHint Computer Institute | Learn skills that move you forward",
  description:
    "Practical computer training in Lagos for students, professionals, and ambitious career switchers.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
