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

const postRequest = async <T, K = any>(
  url: string,
  payload: T,
  params: K = null as any
) => {
  const response = await axiosInstance.post(url, payload, params);
  return response.data;
};

const patchRequest = async <T, K = any>(
  url: string,
  payload: T,
  params: K = null as any
) => {
  const response = await axiosInstance.patch(url, payload, { params });
  return response.data;
};

const deleteRequest = async (url: string) => {
  const response = await axiosInstance.delete(url);
  return response.data;
};

const putRequest = async <T>(url: string, payload: T) => {
  const response = await axiosInstance.put(url, payload);
  return response.data;
};

// USERS API

export const listUsers = async () => await getRequest<IUser[]>(`/users`);

export const retrieveUser = async (id: string) =>
  await getRequest<IUser>(`/users/${id}`);

export const listTodos = async (id: string) =>
  await getRequest<ITodo[]>(`/users/${id}/todos`);
