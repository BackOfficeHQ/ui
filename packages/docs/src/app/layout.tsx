import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

let ShadcnThemeEditor: any;
if (process.env.NODE_ENV === "development") {
  import("shadcn-theme-editor").then((module) => {
    ShadcnThemeEditor = module.default; // or module, depending on the module's export
  });
} else {
  // eslint-disable-next-line react/display-name
  ShadcnThemeEditor = () => null;
}

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Back Office UI Design System",
  description:
    "A set of guidelines, principles, and patterns for designing and building UI at Back Office",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <Header />

          <div className="flex pt-14 min-h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 ml-64 p-8">
              <div className="max-w-3xl mx-auto pt-12">{children}</div>
            </main>
          </div>
        </div>
        <ShadcnThemeEditor />
      </body>
    </html>
  );
}
