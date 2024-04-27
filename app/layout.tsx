import { Lexend } from "next/font/google";
import "./globals.css";
import "@uploadthing/react/styles.css";
import { Providers } from "@/redux/provider";
import { Toaster } from "react-hot-toast";
import NextAuthSessionProvider from "@/providers/NextAuthSessionProvider";

const inter = Lexend({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthSessionProvider>
          <Providers>
            <Toaster />
            {children}
          </Providers>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
