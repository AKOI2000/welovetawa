// import { Geist, Geist_Mono } from "next/font/google";
import { Dancing_Script, Outfit } from "next/font/google";
import "@/app/globals.css";
import "@/app/index.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const dancing_script = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Happy Birthday Tawakalt",
  description: "Generated for my love, Adeshina Tawakalt. Happy birthday",
};

export default function RootLayout({ children }) {
  return (
    // <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
    //   <body>
    //     <main>{children}</main>
    //   </body>
    // </html>

    <html
      lang="en"
      className={`${dancing_script.variable} ${outfit.variable}     `}
    >
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
