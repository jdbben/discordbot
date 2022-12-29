import { SlashCommandBuilder } from 'discord.js';
import dotenv from "dotenv" ;
import { gettheprice  } from '../api/crypto.js';


dotenv.config();
 const data = new SlashCommandBuilder()
    .setName('price')
    .setDescription('give you the price of the asset you wanna know')
    .addStringOption(option => option.setName('asset')
        .setDescription('enter the asset logo f ex: BTC , ETH ...') 
    );
async function execute(interaction) {
   
const asset = await interaction.options.getString('asset');  

gettheprice(asset).then(data=>{
        interaction.reply( `the price of the ${asset} in USD is  ${data.rate} USD  `)
    })


}

         
export { data , execute  }
    