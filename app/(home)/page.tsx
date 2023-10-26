import { HeroBlock } from './components/HeroBlock';
import { Direction } from './components/Direction';

import data from './data.json';
import styles from './page.module.scss';

export default function HomePage() {
	return (
		<>
			<HeroBlock />
			<ul className={styles.directions}>
				{data.map((el, i) => (
					<li key={i}>
						<Direction
							title={el.title}
							image={el.image}
						/>
					</li>
				))}
			</ul>
		</>
	);
}
