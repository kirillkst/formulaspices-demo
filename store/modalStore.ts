import { ModalType } from '@/lib/types';
import { create } from 'zustand';

type ModalStoreProps = {
	type: ModalType | null;
	isOpen: boolean;
	actions: {
		onOpen: (type: ModalType) => void;
		onClose: () => void;
	};
};

export const useModalStore = create<ModalStoreProps>((set) => ({
	type: null,
	isOpen: false,
	actions: {
		onOpen: (type) => set({ isOpen: true, type }),
		onClose: () => set({ type: null, isOpen: false }),
	},
}));

export const useModalStoreActions = () => useModalStore((state) => state.actions);
