import "@styles/globals.css";

import NavBar from "@components/NavBar";
import Topic from "@components/Topic";
import Test from "@components/Test";

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
      <Topic />
      <Test />
      <main className="app">{children}</main>
    </body>
  </html>
);
export default RootLayout;
