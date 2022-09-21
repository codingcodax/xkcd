import { FC } from 'react';
import { Card, Row, Text } from '@nextui-org/react';
import Link from 'next/link';

import type Comic from '~/@types/comic';

interface ComicCardProps {
  id: Comic['id'];
  title: Comic['title'];
  img: Comic['img'];
  alt: Comic['alt'];
}

const ComicCard: FC<ComicCardProps> = ({ id, title, img, alt }) => {
  return (
    <Link passHref href={`/comic/${id}`}>
      <Card isPressable as='a' variant='bordered'>
        <Card.Header
          css={{
            pb: 40,
            position: 'absolute',
            linearGradient: '#000000f2, #00000000',
            zIndex: 1,
          }}
        >
          <Row align='center' justify='space-between'>
            <Text h4 color='white' css={{ mb: 0 }}>
              {title}
            </Text>
            <Text color='#ffffffaa' size={12} weight='bold'>
              #{id}
            </Text>
          </Row>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            alt={alt}
            height={350}
            objectFit='cover'
            src={img}
            width='100%'
          />
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ComicCard;
