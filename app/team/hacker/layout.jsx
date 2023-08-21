import "@styles/globals.css";

export const metadata = {
  title: "2023 meichu hackathon",
};

const HackerLayout = ({ children }) => (
  <html lang="en">
    <body>
      <main className="app">{children}</main>
    </body>
  </html>
);
export default HackerLayout;
