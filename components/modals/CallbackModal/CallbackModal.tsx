'use client';

import { useModalStore, useModalStoreActions } from '@/store/modalStore';
import { ModalType } from '@/lib/types';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/Dialog';
import { FormCallback } from '@/components/FormCallback';

import styles from './CallbackModal.module.scss';

export const CallbackModal = () => {
	const type = useModalStore((state) => state.type);
	const isOpen = useModalStore((state) => state.isOpen);
	const { onClose } = useModalStoreActions();
	const isModalOpen = isOpen && type === ModalType.Callback;

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
				<DialogHeader>
					<DialogTitle>Обратный звонок</DialogTitle>
					<DialogDescription>
						Отправьте заявку, мы&nbsp;перезвоним вам в&nbsp;ближайшее время
					</DialogDescription>
				</DialogHeader>
				<FormCallback />
			</DialogContent>
		</Dialog>
	);
};
