import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';

function ReviewCard({
  review_id,
  title,
  owner,
  review_img_url,
  votes,
  category,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <section className="card">
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflowX="hidden"
          variant="elevated"
        >
          <Image
            objectFit="cover"
            src={review_img_url}
            alt={title}
            maxHeight={'250'}
            maxWidth={'250'}
            padding={25}
          />
          <Stack flexGrow="1" alignItems="center">
            <CardHeader align="center">
              <Heading size="md">Title: {title}</Heading>
            </CardHeader>
            <CardBody>
              <Text py="1">Author: {owner}</Text>
              <Text>Votes: {votes}</Text>
              <Text>
                <p>Category: {category}</p>
              </Text>
            </CardBody>
            <CardFooter>
              <Link className="Link" to={`/reviews/${review_id}`}>
                <Button variant="solid" colorScheme="blue">
                  View Review
                </Button>
              </Link>
            </CardFooter>
          </Stack>
        </Card>
      </section>
    </>
  );
}

export default ReviewCard;
