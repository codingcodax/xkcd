import { Container } from '@nextui-org/react';
import Link from 'next/link';

const Footer = () => {
  return (
    <Container css={{ mt: '$12', textAlign: 'center', fontWeight: 'bold' }}>
      <Link href='https://xkcd.com/' rel='noopener noreferrer' target='_blank'>
        <a>all comics by xkcd</a>
      </Link>
    </Container>
  );
};

export default Footer;
