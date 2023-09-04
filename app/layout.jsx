import "@styles/globals.css";

import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
// import {} from "@next/font"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata = {
  title: "2023 meichu hackathon",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className="bg-[#F5F5F6] top-0 absolute ">

      <NavBar />
      <main className="py-14">{children}</main>
      <Footer />
    </body>
  </html>
);
export default RootLayout;
