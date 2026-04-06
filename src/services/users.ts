import api from "./axiosInstance"
import type { ListUsersResponse, SingleUserResponse } from '../types';
 
export const getUsers = async (page: number = 1): Promise<ListUsersResponse> => {
  const response = await api.get<ListUsersResponse>('/users', {
    params: { page },
  });
  return response.data;
};
 
export const getSingleUser = async (id: number): Promise<SingleUserResponse> => {
  const response = await api.get<SingleUserResponse>(`/users/${id}`);
  return response.data;
};