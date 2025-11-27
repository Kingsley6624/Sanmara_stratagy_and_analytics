import "./globals.css";
import { Open_Sans, Lora } from "next/font/google";
import NavBar from "@/components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import NavigationWrapper from "../components/NavigationWrapper";
import WhatsAppButton from "@/components/WhatsApp";
import ScrollToTop from "@/components/ScrollToTop";
import { orgSchema } from "@/components/orgSchema";
import Script from "next/script";


const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
});


export const metadata = {
  title: "SanMara | Business Research, Financial Strategy & Data Intelligence",
  description: "Discover how SanMara empowers businesses with data-driven strategies, market research, financial consulting, and fraud analytics.",
  robots: "index, follow",
  alternates: {
    canonical: "https://sanmaraconsulting.com/",
  },
};

export default function RootLayout({ children }) {


  return (
    <html lang="en" className={`${openSans.variable} ${lora.variable}`}>

      <body>
        <ScrollToTop>
        <NavigationWrapper>
          <NavBar />
        
        <SideBar />
         {children}
        </NavigationWrapper>
        <WhatsAppButton />
        <Footer />
        
        </ScrollToTop>

       <Script
  id="organization-schema-ld"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(orgSchema),
  }}
/>
      </body>
    </html>
  );
}
