import { GeistSans } from "geist/font/sans";
import { Sidebar } from "../components/Sidebar/Sidebar";
import "../globals.css";
import { AuthContextProvider } from "../contexts/AuthContext";
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthContextProvider>
      <html lang="en" className={GeistSans.className}>
        <body className="bg-gray-200 text-foreground ml-72 mt-8">
          <main className="m-0 flex items-start justify-start">
            <Sidebar />
            {children}
          </main>
        </body>
      </html>
    </AuthContextProvider>
  );
}
