'use client';

import cx from 'classnames';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export type NavLinkProps = typeof Link.defaultProps & {
	href: string;
	exact?: boolean;
};

export const NavLink = ({ children, exact, className, ...props }: NavLinkProps) => {
	const pathname = usePathname();
	const isActive = exact ? pathname === props.href : pathname.startsWith(props.href);
    
	return (
		<Link
			className={cx(className, {
				isActive: isActive,
			})}
			{...props}
		>
			{children}
		</Link>
	);
};
