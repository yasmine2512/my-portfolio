import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
  title: 'Portfolio | Web Developer & AI Engineering Student',
  description: 'Web developer and 3rd year AI Engineering student passionate about building modern web applications and exploring artificial intelligence.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
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
          {/* <video
            autoPlay
            muted
            loop
            playsInline
            className="fixed inset-0 -z-10 h-full w-full object-cover opacity-20 dark:opacity-10"
          >
            <source src="/images/vid1.mp4" type="video/mp4" />
          </video> */}
            {/* <div className="fixed inset-0 -z-10 bg-background/70 dark:bg-background/80" /> */}
             <ThemeBackground />
             <div className="relative min-h-screen">
          {children}
          </div>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
