import axios from 'axios';
const instance = axios.create({ baseURL: 'http://localhost:8080/books' });

export const saveBook = async (obj) => await instance.post('/', obj)

export const getBooks = async () => await instance.get();

export const deleteBook = async (id) => await instance.delete('/' + id);

export const updateBook = async (id, obj) => await instance.put('/'+id, obj);