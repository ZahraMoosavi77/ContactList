import { Inter } from "next/font/google";
import "./globals.css";
import Search from "@/components/modules/Search/Search";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eploria",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Search link={"search"} />
        {children}
      </body>
    </html>
  );
}
