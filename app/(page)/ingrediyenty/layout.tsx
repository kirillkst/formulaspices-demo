import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Ингредиенты',
};

export default function IngredientsLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
