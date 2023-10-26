import Image from 'next/image';

import styles from './Ingredient.module.scss';

type IngredientProps = {
	title: string;
	image: string;
};

export const Ingredient = ({ title, image }: IngredientProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<Image
					src={image}
					width={152}
					height={152}
					alt=""
				/>
			</div>
			<div className={styles.title}>{title}</div>
		</div>
	);
};
