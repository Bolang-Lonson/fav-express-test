import "./globals.css";
import Sidebar from "./components/Sidebar";

// import 'bootstrap-icons/font/bootstrap-icons.css';

export const metadata = {
  title: "Favour Express Administrator",
  description: "Administrator dashboard for Favour Express",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
		<body>
			<Sidebar/>
			<main className='w-full'>
				{children}
			</main>
		</body>
    </html>
  );
}
