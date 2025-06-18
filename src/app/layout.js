import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import { Noto_Sans_Thai } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai"],
  weight: ["400", "500", "600", "700"], // เลือก weight ที่ต้องการ
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap", // เพิ่ม display swap เพื่อ performance ที่ดีขึ้น
});

export const metadata = {
  title: "Peeranat",
  description: "Portfolio Peeranat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${notoSansThai.variable} ${raleway.variable}`}>
        {children}
      </body>
    </html>
  );
}