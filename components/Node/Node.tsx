import { FC } from 'react';

import { Header } from './Header';

import styles from './Node.module.scss';

export const Node: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> & {
	Header: typeof Header;
} = ({ className, ...props }) => (
	<div className={styles.container} {...props}>
		{props.children}
	</div>
);

Node.Header = Header;
