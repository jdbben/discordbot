import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('weather')
    .setDescription('give you the wither in')
    .addStringOption(option => option.setName('city')
        .setDescription('the city you wanna know the wather') // ?? if city not added use the localisation from navigator cookies
    );
// export async function execute(interaction) {
//     const city = interaction.options.getString('city');
//     console.log(city);
// }
         
  
    