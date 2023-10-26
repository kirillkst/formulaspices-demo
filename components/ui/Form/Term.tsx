import Link from 'next/link';
import styles from './Form.module.scss';

export const Term = () => (
	<div className={styles.term}>
		Отправляя форму вы соглашаетесь с{' '}
		<Link href="/politika-konfidenczialnosti">Политикой конфиденциальности</Link>
	</div>
);
