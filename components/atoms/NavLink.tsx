import { FC, ReactNode } from 'react';
import Link from 'next/link';
import { Navbar } from '@nextui-org/react';

interface NavLinkProps {
  children: ReactNode;
  href: string;
  isActive: boolean;
}

const NavLink: FC<NavLinkProps> = ({ children, href, isActive }) => {
  return (
    <Link passHref href={href}>
      <Navbar.Link isActive={isActive}>{children}</Navbar.Link>
    </Link>
  );
};

export default NavLink;
