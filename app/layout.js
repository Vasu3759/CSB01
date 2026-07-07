import './globals.css'
import HeaderClient from '../components/HeaderClient'
import Footer from '../components/Footer'
import CustomCursor from '../components/ui/CustomCursor'

export const metadata = {
  title: {
    default: 'Chalksnboard - Digital Marketing & Web Development Services',
    template: '%s | Chalksnboard'
  },
  description: 'Chalksnboard offers comprehensive digital marketing services including SEO, PPC, Content Marketing, Email Marketing, UI/UX Design, and Mobile App Development. Transform your business with our expert digital solutions.',
  keywords: 'digital marketing, SEO, PPC, content marketing, email marketing, UI/UX design, mobile app development, web development, digital agency',
  authors: [{ name: 'Chalksnboard' }],
  creator: 'Chalksnboard',
  publisher: 'Chalksnboard',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://chalksnboard.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chalksnboard.in',
    title: 'Chalksnboard - Digital Marketing & Web Development Services',
    description: 'Transform your business with our comprehensive digital marketing services including SEO, PPC, Content Marketing, Email Marketing, UI/UX Design, and Mobile App Development.',
    siteName: 'Chalksnboard',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Chalksnboard - Digital Marketing Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chalksnboard - Digital Marketing & Web Development Services',
    description: 'Transform your business with our comprehensive digital marketing services.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KZ48QTFV');`
          }}
        />
        {/* End Google Tag Manager */}
        
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3G0JKFHCK1"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3G0JKFHCK1');
            `
          }}
        />
        {/* End Google tag (gtag.js) */}
        
        <link rel="icon" href="/images/download.png" type="image/png" />
        <link rel="canonical" href="https://chalksnboard.in" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Chalksnboard",
              "url": "https://chalksnboard.in",
              "logo": "https://chalksnboard.in/images/download.png",
              "description": "Digital Marketing & Web Development Services",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "pranjal.kumar@chalksnboard.com"
              },
              "sameAs": [
                "https://www.instagram.com/chalksnboard_official/",
                "https://www.youtube.com/@chalksnboard",
                "https://www.linkedin.com/company/chalksnboard",
                "https://www.facebook.com/chalksnboard",
                "https://twitter.com/chalksnboard"
              ]
            })
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-KZ48QTFV"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        <CustomCursor />
        <HeaderClient />
        <main className="flex-grow flex flex-col min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}