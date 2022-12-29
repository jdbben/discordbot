import { SlashCommandBuilder } from 'discord.js';
import { setTimeout as wait } from 'node:timers/promises';
 const data = new SlashCommandBuilder()
	.setName('ping')
	.setDescription('Replies with PongXXXX!//');
 async function execute(interaction) {
	// await interaction.reply({ content: 'Secret Pong!', ephemeral: true });
	// // await interaction.deferReply({ ephemeral: true });
	// // await wait(6000);
	// // await interaction.editReply('Pong again');
	// await interaction.followUp({ content: 'Pong again!', ephemeral: true });
	// await interaction.deleteReply();
	await interaction.reply('Pong!.');
	console.log('oing')
	//await interaction.deleteReply();
	// console.log(message.content);
}
export {data, execute}