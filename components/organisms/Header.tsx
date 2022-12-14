import { useRouter } from 'next/router';
import { Navbar, Text } from '@nextui-org/react';

import { NavLink } from '~/components/atoms';

const Header = () => {
  const { asPath } = useRouter();

  const linkActive = (path: string) => asPath === path;

  console.log(asPath);

  return (
    <Navbar disableShadow shouldHideOnScroll maxWidth='sm'>
      <Navbar.Brand>
        <Text>
          <Text b>next</Text>xkcd
        </Text>
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight>
        <NavLink href='/' isActive={linkActive('/')}>
          home
        </NavLink>
        <NavLink href='/about' isActive={linkActive('/about')}>
          about
        </NavLink>
      </Navbar.Content>
    </Navbar>
  );
};

export default Header;
