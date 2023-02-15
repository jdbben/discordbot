import { getCity, getWeather } from '../api/weather.js';
import type { Command } from '../types/types';

const data: Command = {
  name: 'weatherz',
  description: 'give you the weather in the city you chose',
  options: [{
    name: 'city',
    description: 'the city you want to know',
    type:3
  }],
  async execute(interaction:any) {
 
    const city = interaction.options.getString('city')
    
    getCity(city).then(data => {
     const firstObject = data[0];
     const key = firstObject.Key;
      return getWeather(key);
    }).then(data => {
      interaction.reply(`In the city of ${city} the weather is ${data.WeatherText}. The temperature is ${data.Temperature.Metric.Value} C°.`);
    });
  }
};

export {data};
