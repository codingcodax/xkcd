import type { AppProps } from 'next/app';
import { Container, NextUIProvider } from '@nextui-org/react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <NextUIProvider>
      <Container xs>
        <Component {...pageProps} />
      </Container>
    </NextUIProvider>
  );
};

export default MyApp;
