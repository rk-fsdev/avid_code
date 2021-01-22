import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';

import Wrapper from '../../components/Wrapper';
import LoadingIndicator from '../../components/LoadingIndicator';
import { useListUsers } from '../../service/hooks';

const Users: React.FC = () => {
  const { data, isLoading } = useListUsers();

  const renderUsersList = () =>
    data?.map((user) => (
      <Link to={`/users/${user.id}`} key={user.id}>
        <Box
          padding="20px"
          mb="5px"
          mt="5px"
          border="1px solid"
          borderRadius="10px"
          borderColor="gray.500"
          _hover={{ cursor: 'pointer', borderColor: 'red.500' }}
        >
          <Text>Username: {user.username}</Text>
          <Text>Name: {user.name}</Text>
          <Text>Email: {user.email}</Text>
        </Box>
      </Link>
    ));

  if (isLoading) return <LoadingIndicator fullScreen />;

  return (
    <Wrapper>
      <Text as="h1" fontSize="30px">
        Users List
      </Text>
      {renderUsersList()}
    </Wrapper>
  );
};

export default Users;
