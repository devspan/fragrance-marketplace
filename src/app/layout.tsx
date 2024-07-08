// src/app/layout.tsx
import '@radix-ui/themes/styles.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pakistan Fragrance Marketplace',
  description: 'Explore a wide range of fragrances from various vendors',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}