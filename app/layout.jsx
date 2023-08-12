import "@styles/globals.css";

import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata = {
  title: "2023 meichu hackathon",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      {/* <div className='main'>
          <div className='gradient' />
        </div> */}

      <NavBar />
      <main className="app">{children}</main>
      <Footer />
    </body>
  </html>
);
export default RootLayout;
