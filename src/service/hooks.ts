import { useQuery } from 'react-query';

import { listTodos, listUsers, retrieveUser } from './api';

export const useListUsers = () => useQuery(['list_users'], () => listUsers());

export const useRetrieveUser = (id: string) =>
  useQuery(['retrive_user', id], () => retrieveUser(id));

export const useListTodos = (id: string) =>
  useQuery(['list_todo', id], () => listTodos(id));
