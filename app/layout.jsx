import "@styles/globals.css";

import NavBar from "@components/NavBar";

export const metadata = {
  title: "2023 meichu hackathon",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className="bg-[#F5F5F6]">
      {/* <div className='main'>
          <div className='gradient' />
        </div> */}

      <NavBar />
      <main className="app">{children}</main>
    </body>
  </html>
);
export default RootLayout;
