import { readdir, readFile, stat } from 'fs/promises';
import { basename } from 'path';

import { GetStaticPaths, GetStaticProps } from 'next';
import { Container, Image, Row, Text } from '@nextui-org/react';
import { FC } from 'react';

import type ComicType from '~/@types/comic';
import { Navigation } from '~/components/molecules';

interface ComicProps {
  comic: ComicType;
  hasPrevios: boolean;
  hasNext: boolean;
  prevId: number;
  nextId: number;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = await readdir('./comics');
  const paths = files.map((file) => {
    const id = basename(file, '.json');

    return { params: { id } };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ComicProps> = async (context) => {
  const id = context.params?.id as string;
  const content = await readFile(`./comics/${id}.json`, 'utf8');
  const comic = JSON.parse(content);

  const idNumber = +id;
  const prevId = idNumber - 1;
  const nextId = idNumber + 1;

  const [prevResult, nextResult] = await Promise.allSettled([
    stat(`./comics/${prevId}.json`),
    stat(`./comics/${nextId}.json`),
  ]);

  const hasPrevios = prevResult.status === 'fulfilled';
  const hasNext = nextResult.status === 'fulfilled';

  return { props: { comic, hasPrevios, hasNext, prevId, nextId } };
};

const Comic: FC<ComicProps> = ({
  comic,
  hasPrevios,
  hasNext,
  prevId,
  nextId,
}) => {
  const { id, title, img, alt, height, width } = comic;

  return (
    <Container>
      <Row align='center' justify='space-between'>
        <Text h2>{title}</Text>
        <Text color='#000000aa' weight='bold'>
          #{id}
        </Text>
      </Row>
      <Image showSkeleton alt={alt} height={height} src={img} width={width} />
      <Text>{alt}</Text>

      <Navigation
        hasNext={hasNext}
        hasPrevios={hasPrevios}
        nextId={nextId}
        prevId={prevId}
      />
    </Container>
  );
};

export default Comic;
