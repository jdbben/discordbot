import fetch from 'node-fetch';
const keys = process.env.keys;

const getWeather = async (id: string) => {
  const base = `http://dataservice.accuweather.com/currentconditions/v1/`;
  const query = `${id}?apikey=${keys}`;
  const response = await fetch(base + query);
  const data = await response.json();
  if (Array.isArray(data) && data.length > 0) {
    return data[0];
  }
};
const getCity = async (city: string) => {
  const base = `http://dataservice.accuweather.com/locations/v1/cities/search`;
  const query = `?apikey=${keys}&q=${city}`;
  const responsed = await fetch(base + query);
  const data = await responsed.json();
  if (Array.isArray(data) && data.length > 0) {
    return data;
  } else {
    throw new Error('API err');
  }
};

export { getWeather, getCity };
