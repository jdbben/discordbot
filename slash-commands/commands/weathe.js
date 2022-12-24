import { SlashCommandBuilder } from 'discord.js';
import fetch from 'node-fetch';
import dotenv from "dotenv" ;
dotenv.config();
 const data = new SlashCommandBuilder()
    .setName('weather')
    .setDescription('give you the wither in')
    .addStringOption(option => option.setName('city')
        .setDescription('the city you wanna know the wather') 
    );
async function execute(interaction) {
   // ?? if city not added use the localisation from navigator cookies
const city = await interaction.options.getString('city');  
   //api key from .env
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


//get the city 

getCity(city).then(data=>{
    return getWeather(data.Key)}).then(data=>{
        interaction.reply( `in the city off ${city} the weather is ${data.WeatherText} the temperature is ${data.Temperature.Metric.Value} C°  `)
    })
}

         
export { data , execute }
    