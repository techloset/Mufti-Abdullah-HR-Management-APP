import { Lexend } from "next/font/google";
import LayoutContent from "../components/layoutComponent/LayoutContent";
import { Suspense } from "react";

const inter = Lexend({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutContent>
          <Suspense fallback={<div>Loading....</div>}>{children}</Suspense>
        </LayoutContent>
      </body>
    </html>
  );
}
