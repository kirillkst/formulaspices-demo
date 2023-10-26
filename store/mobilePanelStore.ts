import { create } from 'zustand';

type ActionsType = 'toggleShow';

type MobilePanelStoreProps = {
	show: boolean;
	actions: { [k in ActionsType]: () => void };
}

export const useMobilePanelStore = create<MobilePanelStoreProps>((set) => ({
	show: false,
	actions: {
		toggleShow: () => set((state) => ({ show: !state.show })),
	},
}));

export const useMobilePanelActions = () => useMobilePanelStore((state) => state.actions);
