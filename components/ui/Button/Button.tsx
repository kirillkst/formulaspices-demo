import cx from 'classnames';

import styles from './Button.module.scss';

interface ButtonProps
	extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	text?: string;
}

export const Button = ({ type = 'button', className, children, ...props }: ButtonProps) => (
	<button
		type={type}
		className={cx(styles.btn, className)}
		{...props}
	>
		{children}
	</button>
);
