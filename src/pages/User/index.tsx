import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Flex, Text } from '@chakra-ui/react';

import LoadingIndicator from '../../components/LoadingIndicator';
import Wrapper from '../../components/Wrapper';
import { useRetrieveUser } from '../../service/hooks';

const User: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useRetrieveUser(id);

  if (isLoading) return <LoadingIndicator fullScreen />;
  if (isError) return <Wrapper>User Data Not Found</Wrapper>;

  return (
    <Wrapper>
      <Text as="h1" fontSize="30px">
        {data?.name}'s Information
      </Text>
      <Text as="pre">{JSON.stringify(data, undefined, 2)}</Text>
      <Flex justifyContent="flex-end">
        <Link to={`/users/${data?.id}/todos`}>
          <Button colorScheme="teal" variant="outline">
            Todo list of {data?.name}
          </Button>
        </Link>
      </Flex>
    </Wrapper>
  );
};

export default User;
