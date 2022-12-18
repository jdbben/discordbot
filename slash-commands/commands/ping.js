const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
module.exports = {
	data: new SlashCommandBuilder()
		.setName('pingxxd')
		.setDescription('Replies with PongXXXX!//'),
	async execute(interaction) {
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
	},
};
