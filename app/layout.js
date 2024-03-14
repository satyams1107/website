import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/MainLayout";
import Experience from "@/components/Experience";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Satyam Singh",
  description: "My portfolio website!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>
        </body>
        <body>
          <Experience></Experience>
        </body>
        
    </html>
  );
}
