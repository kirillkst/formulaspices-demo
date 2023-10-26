import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type PrivacyPolicyProps = {
	show: boolean;
	toggleShow: () => any;
};

export const usePrivacyPolicyStore = create<PrivacyPolicyProps>()(
	persist(
		(set) => ({
			show: true,
			toggleShow: () => set((state) => ({ show: !state.show })),
		}),
		{ name: 'showPrivacyPolicy' }
	)
);

// export const usePrivacyPolicyStore = create<PrivacyPolicyProps>((set) => ({
// 	show: localStorage.getItem('showPrivacyPolicy') != 'false',
// 	toggleShow: () => {
// 		localStorage.setItem('showPrivacyPolicy', 'false');
// 		set({ show: false });
// 	},
// }));
