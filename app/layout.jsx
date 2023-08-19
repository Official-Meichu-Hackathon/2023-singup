import "@styles/globals.css";

import NavBar from "@components/NavBar";
import Topic_new from "@components/Topic_new";
export const metadata = {
  title: "2023 meichu hackathon",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className="">
      {/* <div className='main'>
          <div className='gradient' />
        </div> */}

      <NavBar />

      <Topic_new />
      <main className="app">{children}</main>
    </body>
  </html>
);
export default RootLayout;
