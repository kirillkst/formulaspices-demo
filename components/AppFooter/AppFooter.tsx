'use client';

import cx from 'classnames';
import { useModalStoreActions } from '@/store/modalStore';
import { ModalType } from '@/lib/types';

import { Logo } from '../Logo';
import { MainMenu } from '../MainMenu';

import styles from './AppFooter.module.scss';
import Link from 'next/link';

export const AppFooter = () => {
	const { onOpen } = useModalStoreActions();
	return (
		<footer className={styles.container}>
			<div className={cx(styles.body, 'container')}>
				<Logo />
				<MainMenu />
				<div className={styles.address}>
					Россия, Москва<br /> 
					Ивановская площадь <br />
					Россия, Москва<br /> 
					Театральная площадь, 1
				</div>
				<div className={styles.meta}>
					<button
						type="button"
						className={styles.callback}
						onClick={() => onOpen(ModalType.Callback)}
					>
						Заказать обратный звонок
					</button>
					<Link href="/politika-konfidenczialnosti">Политика конфиденциальности</Link>
				</div>
			</div>
		</footer>
	);
};
