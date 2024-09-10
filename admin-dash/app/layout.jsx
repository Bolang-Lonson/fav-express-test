import "./globals.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

// import 'bootstrap-icons/font/bootstrap-icons.css';

export const metadata = {
  title: "Favour Express Administrator",
  description: "Administrator dashboard for Favour Express",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
		<body className='max-h-fit'>
			<Sidebar/>
			<main className='w-full bg-[#F3F6F8] p-6'>
        <Navbar/>
				{children}
			</main>
		</body>
    </html>
  );
}
