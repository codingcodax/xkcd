import { FC } from 'react';
import { Container } from '@nextui-org/react';

import type Comic from '~/@types/comic';

import { ComicCard } from '../molecules';

interface ComicsProps {
  comics: Comic[];
}

const Comics: FC<ComicsProps> = ({ comics }) => {
  return (
    <Container
      css={{
        p: '0',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.5rem',
      }}
    >
      {comics.slice(1).map(({ id, title, img, alt }) => (
        <ComicCard key={id} alt={alt} id={id} img={img} title={title} />
      ))}
    </Container>
  );
};

export default Comics;
