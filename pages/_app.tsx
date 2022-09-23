import type { AppProps } from 'next/app';
import { Container, NextUIProvider } from '@nextui-org/react';

import { Header } from '~/components/organisms';
import { Footer } from '~/components/atoms';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <NextUIProvider>
      <Container sm>
        <Header />
        <Component {...pageProps} />
      </Container>
      <Footer />
    </NextUIProvider>
  );
};

export default MyApp;
