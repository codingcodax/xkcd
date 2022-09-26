import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { Container, NextUIProvider } from '@nextui-org/react';

import { Header } from '~/components/organisms';
import { Footer } from '~/components/atoms';
import SEO from '~/next-seo.config';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <NextUIProvider>
      <Header />
      <Container sm>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Container>
      <Footer />
    </NextUIProvider>
  );
};

export default MyApp;
