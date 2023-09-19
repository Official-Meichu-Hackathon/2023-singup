import "@styles/globals.css";

import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
// import {} from "@next/font"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata = {
  title: "2023 新竹X梅竹黑客松",
  image: "/assets/images/logo.svg",
  icon: "/assets/icons/favicon.ico",
  url: "https://2023.meichuhackathon.org/",
  description: "「2023 新竹 X 梅竹黑客松」 延續前一屆種下的創意種子，迎接新一年的盛會期待百花綻放，在近年人工智慧與科技蓬勃發展的洪流下，我們邀請到六間國際級企業與新竹市政府，剖析世界所期待得到解答的問題，並提供相關資源與指導，引領所有參賽者成為關鍵的最後一塊拼圖。",

};

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
    <meta name="description" content={metadata.description}/>
      <title>{metadata.title}</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Noto+Serif+TC"
      ></link>
      <link
        rel="icon"
        href="/assets/icons/favicon.ico"
        type="image/x-icon"
      ></link>
    </head>
    <body className="bg-[#F5F5F6] top-0 absolute ">
      <NavBar />
      <main className="py-14">{children}</main>
      <Footer />
    </body>
  </html>
);
export default RootLayout;
