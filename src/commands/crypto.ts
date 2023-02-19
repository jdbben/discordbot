import dotenv from 'dotenv';
import { gettheprice } from '../api/crypto.js';
import type { Command } from '../types/types';
dotenv.config();

const data: Command = {
  name: 'price',
  description: 'give you the price of the asset you wanna know',
  options: [{ name: 'asset', description: 'enter the asset logo f ex: BTC , ETH ...', type: 3 }],
  async execute(interaction: any) {
    const asset = interaction.options.getString('asset');

    gettheprice(asset)
      .then(data => {
        interaction.reply(`the price of the ${asset} in USD is  ${data.rate} USD  `);
      })
      .catch(error => {
        console.error(error);
      });
  },
};

export { data };
