import Link from 'next/link';

export default function NotFound() {
	return (
		<div
			className="container"
			style={{ margin: '50px 0' }}
		>
			<h1>Ошибка 404 - Страница не найдена!</h1>
			<Link href="/">На главную</Link>
		</div>
	);
}
