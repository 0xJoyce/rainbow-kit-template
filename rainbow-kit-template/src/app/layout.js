import { Inter } from "next/font/google";
import "./globals.css";
import RainbowKitImport from "@/components/Rainbow_Kit_Import";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rainbow Kit Template",
  description: "Use this to quickly spin up Rainbow Kit",
};

export default function RootLayout({ children }) {
  return (
     <html lang="en">
    <body className={inter.className}><RainbowKitImport>{children}</RainbowKitImport></body>
  </html>
   
  );
}
