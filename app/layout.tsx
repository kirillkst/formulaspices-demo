import '@/styles/style.scss';

import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { SITE_NAME, TITLE_SEP } from '@/lib/constants';

import { AppHeader } from '@/components/AppHeader';
import { AppMain } from '@/components/AppMain';
import { AppFooter } from '@/components/AppFooter';
import { MobilePanel } from '@/components/MobilePanel';
import { ModalProvider } from '@/providers/modal-provider';
import { PrivacyPolicy } from '@/components/PrivacyPolicy';

const montserrat = Montserrat({
	weight: ['400', '500', '700'],
	subsets: ['latin', 'cyrillic'],
	display: 'swap',
	variable: '--font-montserrat',
});

export const metadata: Metadata = {
	title: {
		template: `%s ${TITLE_SEP} ${SITE_NAME}`,
		default: `${SITE_NAME} ${TITLE_SEP} Специи и ингредиенты`,
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ru">
			<body className={montserrat.variable}>
				<AppHeader />
				<AppMain>{children}</AppMain>
				<AppFooter />
				<MobilePanel />
				<ModalProvider />
				<PrivacyPolicy />
			</body>
		</html>
	);
}
