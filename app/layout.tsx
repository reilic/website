import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sweet Atelier | Thoughtful cakes, simply made',
  description: 'Minimal, thoughtful celebration cakes made to order for birthdays, weddings and everyday occasions.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
