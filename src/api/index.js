import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

export const getUsersAPI = async () => (await axios.get('/users')).data;

export const getUserByIdAPI = async (id) =>
    (await axios.get(`/users/${id}`)).data;

export const createUserAPI = async (user) =>
    (await axios.post('/users', user)).data?.id;

export const updateUserAPI = async (user) =>
    axios.put(`/users/${user.id}`, user);

export const deleteUserAPI = async (id) => axios.delete(`/users/${id}`);
