import type { AppProps } from 'next/app';
import { Container, NextUIProvider } from '@nextui-org/react';

import { Header } from '~/components/organisms';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <NextUIProvider>
      <Header />
      <Container xs>
        <Component {...pageProps} />
      </Container>
    </NextUIProvider>
  );
};

export default MyApp;
