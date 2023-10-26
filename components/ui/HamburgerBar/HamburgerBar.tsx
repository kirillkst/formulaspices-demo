import cx from 'classnames';

import styles from './HamburgerBar.module.scss';

type HamburgerBarProps = {
	isOpen?: boolean;
};

export const HamburgerBar = ({ isOpen = false }: HamburgerBarProps) => {
	return (
		<span className={cx(styles.bar, { [styles.isOpen]: isOpen })}>
			<span></span>
		</span>
	);
};
