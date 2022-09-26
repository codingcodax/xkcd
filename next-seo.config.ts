export const title = 'xkcd: Two Key System';
export const description = '';
export const domain = 'https://xkcd.com/';

const SEO = {
  title,
  description,
  canonical: domain,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: domain,
    title,
    description,
    site_name: 'title',
    images: [
      {
        url: `https://imgs.xkcd.com/comics/two_key_system_2x.png`,
        alt: title,
        width: 1291,
        height: 632,
      },
    ],
  },
  twitter: {
    handle: '@xkcd',
    site: '@xkcd',
    cardType: 'summary_large_image',
  },
};

export default SEO;
