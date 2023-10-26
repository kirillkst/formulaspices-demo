'use client';

import { useModalStoreActions } from '@/store/modalStore';
import { ModalType } from '@/lib/types';

import { Button } from '@/components/ui/Button';

import styles from './HeroBlock.module.scss';

export const HeroBlock = () => {
	const { onOpen } = useModalStoreActions();
    
	return (
		<div className={styles.container}>
			<h1>
				Выбирать лучшее
				<br /> значит выбирать нас!
			</h1>
			<p>Специи и ингредиенты высшего качества</p>
			<Button onClick={() => onOpen(ModalType.Callback)}>оставить заявку</Button>
		</div>
	);
};
