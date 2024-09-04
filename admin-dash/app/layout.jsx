import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";

import 'bootstrap-icons/font/bootstrap-icons.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Favour Express Administrator",
  description: "Administrator dashboard for Favour Express",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
		<body className={inter.className}>
			<Sidebar/>
			<div className='w-full'>
				{children}
			</div>
		</body>
    </html>
  );
}
