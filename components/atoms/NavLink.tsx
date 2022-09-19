import { FC, ReactNode } from 'react';
import { Navbar } from '@nextui-org/react';

interface NavLinkProps {
  children: ReactNode;
  href: string;
  isActive: boolean;
}

const NavLink: FC<NavLinkProps> = ({ children, href, isActive }) => {
  return (
    <Navbar.Link href={href} isActive={isActive}>
      {children}
    </Navbar.Link>
  );
};

export default NavLink;
