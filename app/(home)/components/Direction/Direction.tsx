import Image from 'next/image';
import Link from 'next/link';

import styles from './Direction.module.scss';

type DirectionProps = {
	title: string;
	image: string;
};

export const Direction = ({ title, image }: DirectionProps) => {
	return (
		<div className={styles.container}>
			<Image
				src={image}
				fill
				sizes="100vw"
				alt=""
				style={{ objectFit: 'cover' }}
			/>
			<Link
				href="/ingrediyenty"
				className={styles.title}
			>
				{title}
			</Link>
		</div>
	);
};
