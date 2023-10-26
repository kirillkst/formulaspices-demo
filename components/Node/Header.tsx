import Link from 'next/link';
import styles from './Node.module.scss';

export const Header = ({ children }: { children: React.ReactNode }) => (
    <div className={styles.header}>
        {children}
        <Link href="/" className={styles.back}>назад на главную</Link>
    </div>
)
