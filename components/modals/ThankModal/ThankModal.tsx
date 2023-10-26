'use client';

import { useModalStore, useModalStoreActions } from '@/store/modalStore';
import { ModalType } from '@/lib/types';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/Dialog';
import { FormCallback } from '@/components/FormCallback';

import styles from './ThankModal.module.scss';

export const ThankModal = () => {
	const type = useModalStore((state) => state.type);
	const isOpen = useModalStore((state) => state.isOpen);
	const { onClose } = useModalStoreActions();
	const isModalOpen = isOpen && type === ModalType.Thank;

	return (
		<Dialog
			open={isModalOpen}
			onOpenChange={onClose}
		>
			<DialogContent
				className={styles.container}
				onOpenAutoFocus={(event) => {
					event.preventDefault();
				}}
			>
				<DialogHeader style={{marginBottom: 0}}>
					<DialogTitle>Спасибо!</DialogTitle>
					<DialogDescription>
                        Ваше сообщение отправлено
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};
