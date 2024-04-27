import { Lexend } from "next/font/google";
import LayoutContent from "../components/layoutComponent/LayoutContent";

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
        {/* <div className="flex h-screen bg-black">
          <div className="text-white w-64 flex-shrink-0">
            <Sidebar />
          </div>
          <div className="flex flex-col flex-1">
            <header className="text-white px-4 py-2 flex justify-between items-center">
              <Header {...headerProps} />
            </header> */}
        <LayoutContent children={children} />
        {/* <main className="p-4 flex-1 overflow-y-auto">{children}</main> */}
        {/* </div>
        </div> */}
      </body>
    </html>
  );
}
