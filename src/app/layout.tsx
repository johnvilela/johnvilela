import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import { TerminalWindow } from "@/components/terminal-window";
import "./globals.css";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

export const metadata: Metadata = {
  title: {
    default: "John Vilela",
    template: "%s | John Vilela",
  },
  description: "John Vilela - Software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={vt323.variable}>
      <body>
        <TerminalWindow>{children}</TerminalWindow>
      </body>
    </html>
  );
}
