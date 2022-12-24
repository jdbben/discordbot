import { SlashCommandBuilder } from 'discord.js';

 const data = new SlashCommandBuilder()
    .setName('weather')
    .setDescription('give you the wither in')
    .addStringOption(option => option.setName('city')
        .setDescription('the city you wanna know the wather') 
    );
async function execute(interaction) {
    const city = interaction.options.getString('city'); // ?? if city not added use the localisation from navigator cookies
    console.log(city);
}
         
export {data,execute}
    