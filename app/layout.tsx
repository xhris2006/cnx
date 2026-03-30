import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import './globals.css'

export const metadata: Metadata = {
  title: 'CNX',
  description: 'Plateforme academique pour ressources etudiantes et collaboration.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
