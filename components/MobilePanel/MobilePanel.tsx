'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { useMobilePanelActions, useMobilePanelStore } from '@/store/mobilePanelStore';
import { MainMenu } from '../MainMenu';

import styles from './MobilePanel.module.scss';

export const MobilePanel = () => {
	const pathname = usePathname();
	const show = useMobilePanelStore((state) => state.show);
	const { toggleShow } = useMobilePanelActions();

	useEffect(() => {
		if (show) {
			window.scrollTo(0, 0);
			document.body.classList.add('full-fixed');
		} else {
			document.body.classList.remove('full-fixed');
		}

	}, [show]);

	useEffect(() => {
		if (show) toggleShow();
	}, [pathname]);

	if (!show) return null;

	return (
		<div className={styles.container}>
			<div className={styles.body}>
				<MainMenu />
			</div>
		</div>
	);
};
