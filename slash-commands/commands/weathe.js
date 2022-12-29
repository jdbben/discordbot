import { SlashCommandBuilder } from 'discord.js';
import dotenv from "dotenv" ;
import { getCity, getWeather } from '../api/weatherapp.js';
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

getCity(city).then(data=>{
    return getWeather(data.Key)}).then(data=>{
        interaction.reply( `in the city off ${city} the weather is ${data.WeatherText} the temperature is ${data.Temperature.Metric.Value} C°  `)
    })
}

         
export { data , execute }
    