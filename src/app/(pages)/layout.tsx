// _layers.css must be first
import '../styles/_layers.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { type Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import React, { type ReactNode } from 'react';
import { Providers } from '~/app/providers';
import { Toaster } from '~/shared/ui/toaster';
import '../styles/index.css';
import styles from './layout.module.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
});

export const metadata: Metadata = {
	title: 'Electric avenue'
};

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html lang="en" data-scroll-behavior="smooth">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<Providers>
					<Toaster />
					<div id="root" className={styles.layoutWrapper}>
						{children}
					</div>
					<SpeedInsights />
				</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
