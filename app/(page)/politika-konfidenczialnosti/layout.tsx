import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Политика конфиденциальности',
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
