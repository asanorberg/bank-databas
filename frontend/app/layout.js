import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

//components
import Header from "./components/Header";
import App from "./app";

export const metadata = {
  title: "Money Bank",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <App>
          <Header />
          {children}
        </App>
      </body>{" "}
    </html>
  );
}
