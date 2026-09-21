import '../index.css';

export const metadata = {
  title: 'ROD24 | Comfortable rides across Bihar',
  description: 'Book comfortable, affordable and reliable local, airport and outstation rides across Bihar with ROD24.',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'ROD24 | Comfortable rides across Bihar',
    description: 'Book comfortable, affordable and reliable local, airport and outstation rides across Bihar with ROD24.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ROD24 | Comfortable rides across Bihar',
    description: 'Book comfortable, affordable and reliable local, airport and outstation rides across Bihar with ROD24.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}