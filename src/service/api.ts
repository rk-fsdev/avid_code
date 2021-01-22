import axios, { AxiosInstance } from 'axios';
import { ITodo, IUser } from '../utils/interface';

let axiosInstance: AxiosInstance;

const baseURL: string = process.env.REACT_APP_SERVER;

axiosInstance = axios.create({
  baseURL,
});

const getRequest = async <T, K = any>(
  url: string,
  params: K = null as any
): Promise<T> => {
  const response = await axiosInstance.get(url, { params });
  return response.data;
};

// USERS API

export const listUsers = async () => await getRequest<IUser[]>(`/users`);

export const retrieveUser = async (id: string) =>
  await getRequest<IUser>(`/users/${id}`);

export const listTodos = async (id: string) =>
  await getRequest<ITodo[]>(`/users/${id}/todos`);
