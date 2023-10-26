import { forwardRef } from 'react';
import cx from 'classnames';
import { InputProps } from './types';

import styles from './Form.module.scss';

export const TextField = forwardRef<HTMLInputElement, InputProps>(
	({ type = 'text', placeholder, error, ...props }, ref) => (
		<div className={`${styles.field} ${styles.text}`}>
			<input
				ref={ref}
				type={type}
				className={cx(styles.input, {
					[styles.errorInput]: error,
				})}
				placeholder={placeholder}
				{...props}
			/>
			{error && <span className={styles.errorMessage}>{error.message}</span>}
		</div>
	)
);
