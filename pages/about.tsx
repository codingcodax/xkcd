import NextLink from 'next/link';
import { Link, Text } from '@nextui-org/react';

import Seo from '~/components/atoms/Seo';

const About = () => {
  return (
    <div>
      <Seo name='About' path='/about' />

      <Text>
        About from{' '}
        <NextLink passHref href='https://xkcd.com/'>
          <Link
            css={{ d: 'inline-block' }}
            rel='noopener noreferrer'
            target='_blank'
          >
            xkcd.com
          </Link>
        </NextLink>
      </Text>

      <Text h2>Who are you?</Text>
      <Text>
        I&apos;m just this guy, you know? I&apos;m a CNU graduate with a degree
        in physics. Before starting xkcd, I worked on robots at NASA&apos;s
        Langley Research Center in Virginia. As of June 2007 I live in
        Massachusetts. In my spare time I climb things, open strange doors, and
        go to goth clubs dressed as a frat guy so I can stand around and look
        terribly uncomfortable. At frat parties I do the same thing, but the
        other way around.
      </Text>
    </div>
  );
};

export default About;
