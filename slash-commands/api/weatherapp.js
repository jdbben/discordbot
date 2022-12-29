import fetch from 'node-fetch';
const key = process.env.keys

const getWeather= async(id)=>{
    const base = `http://dataservice.accuweather.com/currentconditions/v1/`;
const query = `${id}?apikey=${key}`;
    const response = await fetch(base+query);
const data = await response.json();
return data[0]
};
const getCity = async (city)=>{
    const base = `http://dataservice.accuweather.com/locations/v1/cities/search`;
    const query = `?apikey=${key}&q=${city}`;
        const responsed = await fetch(base+query);
    const data = await responsed.json();
    return data[0]
    };

export { getWeather , getCity}
