import "./globals.css";
import { Inter, Orbitron } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-heading" });

export const metadata = {
  title: "DarkFiber",
  description: "Never Halfway",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="bg-bg text-white font-sans">{children}</body>
    </html>
  );
}
