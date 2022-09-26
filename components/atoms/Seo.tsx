import { NextSeo } from 'next-seo';
import { FC } from 'react';

import { domain } from '~/next-seo.config';

interface SeoProps {
  name: string;
  path: string;
}

const Seo: FC<SeoProps> = ({ name, path }) => {
  const title = `xkcd - ${name}`;
  const url = `${domain}/${path}`;

  return (
    <NextSeo
      canonical={url}
      openGraph={{
        url,
        title,
      }}
      title={title}
    />
  );
};

export default Seo;
