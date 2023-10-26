import styles from './AppMain.module.scss';

export const AppMain = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className={styles.container}>
			<div className="container">{children}</div>
		</main>
	);
};
