import { FC } from 'react';
import { FormProps } from './types';

import { TextField } from './TextField';
import { Submit } from './Submit';
import { Term } from './Term';

import styles from './Form.module.scss';

export const Form: FC<FormProps> & {
	TextField: typeof TextField;
	Submit: typeof Submit;
	Term: typeof Term;
} = (props) => (
	<form
		className={styles.form}
		{...props}
	>
		{props.children}
	</form>
);

Form.TextField = TextField;
Form.Submit = Submit;
Form.Term = Term;
