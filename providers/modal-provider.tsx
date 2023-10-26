// 'use client';

// import { useEffect, useState } from 'react';

import { CallbackModal } from '@/components/modals/CallbackModal';
import { ThankModal } from '@/components/modals/ThankModal';

export const ModalProvider = () => {
	// const [isMounted, setIsMounted] = useState(false);

	// useEffect(() => {
	//   setIsMounted(true);
	// }, []);
  
	// if (!isMounted) {
	//   return null;
	// }

	return (
		<>
			<CallbackModal />
			<ThankModal />
		</>
	);
};
