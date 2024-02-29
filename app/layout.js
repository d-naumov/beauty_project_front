import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import BackgroundAnimation from "./_components/BackgroundAnimation";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <BackgroundAnimation />
        <div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}

