import axios from 'axios';

// export const server = `https://api.sampleapis.com/coffee/hot`;

export const server = `/coffees-local-data.json`;

// export const getCoffeeData = async (id: any) => {
//   const { data } = await axios(`${server}` + id);
//   return data;
// };

export const getCoffeesData = async () => {
  const { data } = await axios.get(`${server}`);
  return data;
};
