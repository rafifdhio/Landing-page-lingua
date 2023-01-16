import "./globals.css";
import Header from "./header";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className=" font-axiforma">
        <Header/>
        {children}
      </body>
    </html>
  );
}
