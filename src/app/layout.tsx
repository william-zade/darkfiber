// app/layout.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { Inter, Orbitron } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata = {
  title: "NeverHalfway | Bill Zade",
  description: "Builder. Veteran. Musician. Coder.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${orbitron.variable} d-flex flex-column min-vh-100`}>
        <Navbar />
          <main className="d-flex flex-column flex-grow-1 px-3">
            {children}
          </main>
        <Footer />
      </body>

    </html>
  );
}
