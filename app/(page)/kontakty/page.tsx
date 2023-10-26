'use client';

import { Node } from '@/components/Node';
import { FormCallback } from '@/components/FormCallback';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import styles from './page.module.scss';

export default function ContactsPage() {
	const error = console.error;
	console.error = (...args: any) => {
		if (/defaultProps/.test(args[0])) return;
		error(...args);
	};

	return (
		<Node>
			<Node.Header>
				<h1>Контакты</h1>
			</Node.Header>
			<p>
				Комплексный поставщик
				<br /> предприятий пищевой промышленности «Формула»
			</p>
			<div className={styles.grid}>
				<YMaps>
					<div>
						<span style={{ display: 'block', fontWeight: 500 }}>Почта:</span>
						<a
							href="mailto:info@demosite.com"
							className={styles.contact}
						>
							info@demosite.com
						</a>
						<span style={{ display: 'block', fontWeight: 500, marginTop: '10px' }}>
							Номер телефона:
						</span>
						<a
							href="tel:+79999999999"
							className={styles.contact}
						>
							+7 999 999 99 99
						</a>
						<a
							href="tel:+79999999999"
							className={styles.contact}
						>
							+7 999 999 99 99
						</a>
						<div className={styles.form}>
							<FormCallback />
						</div>
					</div>
					<div>
						<Map
							width="100%"
							height={360}
							defaultState={{
								center: [55.751426, 37.618879],
								zoom: 10,
								controls: ['zoomControl'],
							}}
							modules={['control.ZoomControl']}
						>
							<Placemark defaultGeometry={[55.751426, 37.618879]} />
						</Map>

						<p>
							Россия, Москва
							<br /> Ивановская площадь
						</p>
					</div>
					<div>
						<Map
							width="100%"
							height={360}
							defaultState={{
								center: [55.760257, 37.618536],
								zoom: 13,
								controls: ['zoomControl'],
							}}
							modules={['control.ZoomControl']}
						>
							<Placemark defaultGeometry={[55.760257, 37.618536]} />
						</Map>

						<p>
							Россия, Москва
							<br /> Театральная площадь, 1
						</p>
					</div>
				</YMaps>
			</div>
		</Node>
	);
}
