import cx from 'classnames';

import { Logo } from '../Logo';
import { MainMenu } from '../MainMenu';
import { MobilePanelToggle } from '../MobilePanelToggle';

import styles from './AppHeader.module.scss';

export const AppHeader = () => {
	return (
		<header className={styles.container}>
			<div className={cx(styles.body, 'container')}>
				<Logo />
				<MainMenu />
				<MobilePanelToggle className={styles.mobileMenu} />
			</div>
		</header>
	);
};
