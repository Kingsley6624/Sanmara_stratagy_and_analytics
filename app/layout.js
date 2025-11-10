import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import NavBar from "@/components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import NavigationWrapper from "../components/NavigationWrapper";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter", });
const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"], variable: "--font-poppins", });


export const metadata = {
  title: "SanMara | Business Research, Financial Strategy & Data Intelligence",
  description: "Discover how SanMara empowers businesses with data-driven strategies, market research, financial consulting, and fraud analytics.",
  robots: "index, follow",
  alternates: {
    canonical: "https://sanmarastratagyandanalytics.vercel.app/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className} ${poppins.className}`}>
      <body>
        <NavigationWrapper>
        <NavBar />
        <SideBar />
        {children}
        </NavigationWrapper>
        <Footer />
      </body>
    </html>
  );
}
