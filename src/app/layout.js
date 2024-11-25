import Header from "@/components/Header";
import "./globals.css";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`sm:h-screen bg-gradient-to-t from-primary to-lightBlue ${poppins.className} relative`}>
        <div className="mx-auto w-[90%] sm:w-[80%] h-full">
          <Header/>
          {children}
          </div>
      </body>
    </html>
  );
}
