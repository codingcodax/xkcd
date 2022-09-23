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
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            alt={alt}
            height={350}
            objectFit='cover'
            src={img}
            width='100%'
          />
        </Card.Body>
        <Card.Footer css={{ bg: '$foreground' }}>
          <Row align='center' justify='space-between'>
            <Text b color='$background'>
              {title}
            </Text>
            <Text b color='$backgroundAlpha'>
              #{id}
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default ComicCard;
