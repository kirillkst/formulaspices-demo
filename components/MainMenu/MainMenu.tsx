import { NavLink } from '../ui/NavLink';
import styles from './MainMenu.module.scss';

export const MainMenu = () => {
	return (
		<nav className={styles.container}>
			<ul>
				<li>
					<NavLink href="/" exact>Главная</NavLink>
				</li>
				<li>
					<NavLink href="/o-kompanii">О компании</NavLink>
				</li>
				<li>
					<NavLink href="/ingrediyenty">Ингредиенты</NavLink>
				</li>
				<li>
					<NavLink href="/kontakty">Контакты</NavLink>
				</li>
			</ul>
		</nav>
	);
};
