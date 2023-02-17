import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Dra. Jociene Andrade - Estética Avançada!</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
