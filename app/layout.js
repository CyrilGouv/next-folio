import SmoothScrolling from "@/components/UI/SmoothScrolling/SmoothScrolling"
import Header from "@/components/Layout/Header/Header"

import "@/assets/styles/app.scss"


export const metadata = {
  metadataBase: new URL('https://cyrilgouv.com')
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
