import { Inter } from 'next/font/google';
import styles from './page.styles.module.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'plant page',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={styles.html}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
