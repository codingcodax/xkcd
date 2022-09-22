import fs from 'fs/promises';

import { Container, Text } from '@nextui-org/react';
import type { NextPage } from 'next';

import type Comic from '~/@types/comic';
import { Comics } from '~/components/organisms';
import { ComicCard } from '~/components/molecules';

export const getStaticProps = async () => {
  const files = await fs.readdir('./comics');
  const latestComicsFiles = files.slice(-9, files.length);
  const promisesReadFiles = latestComicsFiles.map(async (file) => {
    const content = await fs.readFile(`./comics/${file}`, 'utf8');

    return JSON.parse(content);
  });

  const latestComics: Comic[] = await Promise.all(promisesReadFiles);

  return { props: { latestComics: latestComics.reverse() } };
};

interface HomeProps {
  latestComics: Comic[];
}

const Home: NextPage<HomeProps> = ({ latestComics }) => {
  const lastComic = latestComics[0];

  return (
    <div>
      <Text h2>Latest Comics</Text>

      <Container css={{ p: 0, mb: '$10' }}>
        <ComicCard
          alt={lastComic.alt}
          id={lastComic.id}
          img={lastComic.img}
          title={lastComic.title}
        />
      </Container>

      <Comics comics={latestComics} />
    </div>
  );
};

export default Home;
