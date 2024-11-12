import axiosRoot from 'axios';

const baseUrl = import.meta.env.VITE_API_URL;

export const axios = axiosRoot.create({
  baseURL: baseUrl,
});

export const post = async (url, { arg }) => {
  const {
    data,
  } = await axios.post(url, arg);

  return data;
};


export const getById = async (url) => {
  const {
    data,
  } = await axios.get(`${baseUrl}/${url}`);

  return data;
};


