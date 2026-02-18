import axios from "axios";
import type { User } from "../types/User.ts";

const API = "http://localhost:5000/api/users";

export const getUsers = () =>
  axios.get<{ data: User[] }>(API);

export const createUser = (data: User) =>
  axios.post(API, data);

export const updateUser = (id: string, data: User) =>
  axios.put(`${API}/${id}`, data);

export const deleteUser = (id: string) =>
  axios.delete(`${API}/${id}`);
