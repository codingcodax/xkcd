import { useRouter } from 'next/router';
import { Navbar, Text, Button } from '@nextui-org/react';

import Link from '~/components/atoms/NavLink';

const Header = () => {
  const { asPath } = useRouter();

  const linkActive = (path) => asPath === path;

  console.log(asPath);

  return (
    <Navbar disableShadow>
      <Navbar.Brand>
        <Text>
          <Text b>next</Text>xkcd
        </Text>
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight>
        <Link href='/' isActive={linkActive('/')}>
          home
        </Link>
        <Link href='/about' isActive={linkActive}>
          about
        </Link>

        <Button auto flat>
          es
        </Button>
      </Navbar.Content>
    </Navbar>
  );
};

export default Header;
