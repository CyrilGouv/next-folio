import SmoothScrolling from "@/components/UI/SmoothScrolling/SmoothScrolling"
import Header from "@/components/Layout/Header/Header"
import Footer from "@/components/Layout/Footer/Footer"

import "@/assets/styles/app.scss"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <SmoothScrolling>
          <Header />
          <main>
            { children }
          </main>
        </SmoothScrolling>
      </body>
    </html>
  );
}
