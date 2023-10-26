'use client';

import { useEffect, useState } from 'react';
import { usePrivacyPolicyStore } from '@/store/privacyPolicyStore';

import Link from 'next/link';
import { Button } from '../ui/Button';

import styles from './PrivacyPolicy.module.scss';

export const PrivacyPolicy = () => {
	const [isMounted, setIsMounted] = useState<boolean>(false);
	const show = usePrivacyPolicyStore((state) => state.show);
	const toggleShow = usePrivacyPolicyStore((state) => state.toggleShow);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted || !show) {
		return null;
	}

	return (
		<div className={styles.container}>
			<p>
				Этот сайт использует файлы cookie и&nbsp;сервисы сбора технических данных посетителей.
				Продолжая использовать наш сайт, вы&nbsp;автоматически соглашаетесь с&nbsp;
				<Link href="/politika-konfidenczialnosti">политикой конфиденциальности.</Link>
			</p>
			<Button onClick={toggleShow}>Закрыть</Button>
		</div>
	);
};
