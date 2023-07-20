import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: '김영은 포트폴리오',
	description: 'Frontend Developer 김영은 ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ko">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
