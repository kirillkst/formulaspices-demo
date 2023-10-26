'use client';

import { useRef, ElementRef } from 'react';

import { Node } from '@/components/Node';
import { Ingredient } from './components/Ingredient';
import { FormCallback } from '@/components/FormCallback';
import { Button } from '@/components/ui/Button';

import data from './data.json';
import styles from './page.module.scss';

export default function IngredientsPage() {
	const callbackRef = useRef<ElementRef<'div'>>(null);
	
	return (
		<Node>
			<Node.Header>
				<h1>Ингредиенты</h1>
				<Button
					style={{ height: '47px', borderRadius: '20px', color: '#111E43', padding: '0 20px' }}
					onClick={() => callbackRef.current?.scrollIntoView({ behavior: 'smooth' })}
				>
					Перейти форме обратной связи
				</Button>
			</Node.Header>
			<ul className={styles.grid}>
				{data.map((el, i) => (
					<li key={i}>
						<Ingredient
							title={el.title}
							image={el.image}
						/>
					</li>
				))}
			</ul>
			<div
				className={styles.callback}
				ref={callbackRef}
			>
				<p>
					Заинтересованы в сотрудничестве?
					<br /> Давайте обсудим детали!
				</p>
				<FormCallback />
			</div>
		</Node>
	);
}
