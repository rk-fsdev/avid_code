import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingIndicator from '../../components/LoadingIndicator';

import Wrapper from '../../components/Wrapper';
import { useListTodos } from '../../service/hooks';

const Todos: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useListTodos(id);
  const [completed, setCompleted] = useState<boolean>(false);

  const handleCompletedClick = () => {
    setCompleted(!completed);
  };

  const renderTodos = () =>
    (completed
      ? data?.filter((todo) => todo.completed)
      : data
    )?.map((todo, index) => (
      <Box key={todo.id}>{`${index + 1}: ${todo.title}`}</Box>
    ));

  if (isLoading) return <LoadingIndicator fullScreen />;
  if (isError) return <Wrapper>TodoList not found</Wrapper>;

  return (
    <Wrapper>
      <Flex
        flexDir={{ base: 'column', sm: 'row' }}
        justifyContent={{ base: 'center', sm: 'space-between' }}
        alignItems="center"
      >
        <Text as="p" fontSize="30px">
          Todo List
        </Text>
        <Button
          colorScheme="teal"
          variant="outline"
          onClick={handleCompletedClick}
        >
          {completed ? 'Show all tasks' : 'Show only completed tasks'}
        </Button>
      </Flex>
      {renderTodos()}
    </Wrapper>
  );
};

export default Todos;
