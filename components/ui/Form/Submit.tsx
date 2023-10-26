import { SubmitProps } from './types';

import { Button } from '../Button';

export const Submit = ({ text, ...props }: SubmitProps) => (
	<Button
		type="submit"
		{...props}
	>
		{text}
	</Button>
);
