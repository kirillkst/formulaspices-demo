import Link from 'next/link';
import Image from 'next/image';

import logo from '@/public/images/logo.svg';
import styles from './Logo.module.scss';

type LogoProps = {
	white?: boolean;
};

export const Logo = (props: LogoProps) => {
	return (
		<Link href="/" className={styles.container}>
			<Image src={logo} alt="Formula" priority />
		</Link>
	);
};
