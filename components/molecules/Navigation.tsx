import NextLink from 'next/link';
import { Link, Row } from '@nextui-org/react';
import { FC } from 'react';

interface NavigationProps {
  hasPrevios: boolean;
  hasNext: boolean;
  prevId: number;
  nextId: number;
}

const Navigation: FC<NavigationProps> = ({
  hasPrevios,
  hasNext,
  prevId,
  nextId,
}) => {
  return (
    <Row justify='space-between'>
      {hasPrevios ? (
        <NextLink href={`/comic/${prevId}`}>
          <Link>&larr; Previous</Link>
        </NextLink>
      ) : (
        <div></div>
      )}

      {hasNext ? (
        <NextLink href={`/comic/${nextId}`}>
          <Link>Next &rarr;</Link>
        </NextLink>
      ) : (
        <div></div>
      )}
    </Row>
  );
};

export default Navigation;
