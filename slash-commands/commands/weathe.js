const { SlashCommandBuilder } = require('discord.js');
const { execute } = require('./ping');
module.exports = {
    data: new SlashCommandBuilder()
	.setName('weather')
	.setDescription('give you the wither in')
	.addStringOption(option =>
		option.setName('city')
			.setDescription('the city you wanna know the wather')// ?? if city not added use the localisation from navigator cookies
    )
   
    ,
    
	async execute (interaction){
        const city = interaction.options.getString('city');
console.log(city)
    }
          //  const cityName = interaction.options.getInteger('amount');}
    }
         
  
    