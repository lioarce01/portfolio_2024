import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Lionel Arce - Software Developer",
  description: "Welcome to my portfolio!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#030303]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
