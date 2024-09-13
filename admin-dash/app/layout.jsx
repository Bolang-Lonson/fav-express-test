import "./globals.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

// import 'bootstrap-icons/font/bootstrap-icons.css';

export const metadata = {
  title: "Favour Express Administrator",
  description: "Administrator dashboard for Favour Express",
};

export default function RootLayout({ children }) {

  const loggedIn = true;
  return (
    <html lang="en">
		<body className='max-h-screen'>
			{loggedIn && <Sidebar/>}
			{loggedIn ? 
        <main className='w-full bg-[#F3F6F8] p-6 overflow-y-scroll'>
          <Navbar/>
          {children}
        </main>:
        <main className="w-full bg-[#F9F9F9] min-h-screen px-32 py-24">
          {children}
        </main>
      }
		</body>
    </html>
  );
}
