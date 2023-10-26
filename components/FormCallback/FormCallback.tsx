'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useModalStoreActions } from '@/store/modalStore';
import { ModalType } from '@/lib/types';

import { Form } from '../ui/Form';

export type FormInputProps = {
	name: string;
	phone: string;
};

export const FormCallback = () => {
	const { onClose, onOpen } = useModalStoreActions();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<FormInputProps>();

	const onSubmit: SubmitHandler<FormInputProps> = async (data) => {
		try {
			await fetch('/api/email', {
				method: 'POST',
				body: JSON.stringify(data),
			})
				.then((res) => {
					return res.ok ? res.json() : res.json().then((err: string) => Promise.reject(err));
				})
				.then(() => {
					onClose();
					setTimeout(() => onOpen(ModalType.Thank), 0);
					reset();
				});
		} catch (err) {
			alert('Возникла ошибка!');
		}
	};

	return (
		<Form
			action="#"
			name="form-callback"
			onSubmit={handleSubmit(onSubmit)}
		>
			<Form.TextField
				{...register('name', { required: 'Заполните поле' })}
				type="text"
				placeholder="Ваше имя"
				error={errors.name}
			/>

			<Form.TextField
				{...register('phone', { required: 'Заполните поле' })}
				type="tel"
				placeholder="Ваш телефон"
				error={errors.phone}
			/>

			<Form.Submit
				text="Перезвоните мне"
				disabled={isSubmitting}
			/>

			<Form.Term />
		</Form>
	);
};
