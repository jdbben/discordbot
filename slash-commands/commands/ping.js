import { SlashCommandBuilder } from 'discord.js';
import { setTimeout as wait } from 'node:timers/promises';
export const data = new SlashCommandBuilder()
	.setName('pingxxd')
	.setDescription('Replies with PongXXXX!//');
export async function execute(interaction) {
	// await interaction.reply({ content: 'Secret Pong!', ephemeral: true });
	// // await interaction.deferReply({ ephemeral: true });
	// // await wait(6000);
	// // await interaction.editReply('Pong again');
	// await interaction.followUp({ content: 'Pong again!', ephemeral: true });
	// await interaction.deleteReply();
	await interaction.reply('Pong!.');
	//await interaction.deleteReply();
	const message = await interaction.fetchReply();
	console.log(message.content);
}
