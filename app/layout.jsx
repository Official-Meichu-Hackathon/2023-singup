import "@styles/globals.css";

import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
// import {} from "@next/font"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata = {
  title: "2023 meichu hackathon",
  image: "/assets/images/logo.svg",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Noto+Serif+TC"
    ></link>
    <link
      rel="icon"
      href="/assets/icons/favicon.ico"
      type="image/x-icon"
    ></link>
    <body className="bg-[#F5F5F6] top-0 absolute ">
      <NavBar />
      <main className="py-14">{children}</main>
      <Footer />
    </body>
  </html>
);
export default RootLayout;
