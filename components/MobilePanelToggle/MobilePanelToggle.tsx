'use client';

import { useMobilePanelActions, useMobilePanelStore } from '@/store/mobilePanelStore';
import { HamburgerBar } from '../ui/HamburgerBar';

interface MobilePanelToggleProps
	extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const MobilePanelToggle = (props: MobilePanelToggleProps) => {
	const show = useMobilePanelStore((state) => state.show);
	const { toggleShow } = useMobilePanelActions();

	return (
		<button
			type="button"
			onClick={toggleShow}
			{...props}
		>
			<HamburgerBar isOpen={show} />
		</button>
	);
};
