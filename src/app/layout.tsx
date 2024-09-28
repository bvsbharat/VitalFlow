import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { MainLayoutProps } from "./types";

export default function MainLayout({ children }: MainLayoutProps) {
return (
<html lang="en">
<body className="bg-gray-100 min-h-screen flex text-black">
<Sidebar />
<main className="flex-grow p-6 ml-16">
{children}
</main>
</body>
</html>
);
}