import '@styles/globals.css'

import NavBar from "@components/NavBar";


export const metadata = {
  title: "2023 meichu hackathon" 
}

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body> 
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <NavBar /> 
          {children}
        </main> 
    </body>
  </html>
);
export default RootLayout; 

