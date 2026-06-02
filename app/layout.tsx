import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeBackground } from '@/components/theme-background'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const geistMono = Geist_Mono({ 
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Portfolio | Yasmine',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
             <ThemeBackground />
             <div className="relative min-h-screen">
          {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
