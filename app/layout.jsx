import "@styles/globals.css";

import NavBar from "@components/NavBar";
import Topic from "@components/Topic";

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
      <Topic />
    </body>
  </html>
);
export default RootLayout;
