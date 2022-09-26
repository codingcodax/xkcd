import { useRouter } from 'next/router';
import { Navbar, Text, Button } from '@nextui-org/react';

import { NavLink } from '~/components/atoms';

const Header = () => {
  const { asPath } = useRouter();

  const linkActive = (path: string) => asPath === path;

  console.log(asPath);

  return (
    <Navbar disableShadow shouldHideOnScroll maxWidth='xs'>
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

        <Button auto flat>
          es
        </Button>
      </Navbar.Content>
    </Navbar>
  );
};

export default Header;
