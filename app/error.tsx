'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
	useEffect(() => {
	}, [error]);

	return (
		<div>
			<h2>Что-то пошло не так</h2>
			<button onClick={() => reset()}>Обновить страницу</button>
		</div>
	);
}
