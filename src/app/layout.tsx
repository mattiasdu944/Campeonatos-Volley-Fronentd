import "./globals.css";
import Providers from '../providers';
import { Inter, Montserrat } from "next/font/google";


const inter = Montserrat( { subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body
        className={`${inter.className}`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
