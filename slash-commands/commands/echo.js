import { Client, Collection, Events, GatewayIntentBits } from 'discord.js';
import { SlashCommandBuilder } from 'discord.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
export const data = new SlashCommandBuilder()
	.setName('echo')
	.setDescription('Replies with your input!')
	.addStringOption(option => option.setName('input00')
		.setDescription('The input to echo back')
		// Ensure the text will fit in an embed description, if the user chooses that option
		.setMaxLength(2000))
	.addChannelOption(option => option.setName('channel')
		.setDescription('The channel to echo into'))
	// Ensure the user can only select a TextChannel for output
	//.addChannelTypes(ChannelType.GuildText))
	.addBooleanOption(option => option.setName('embed')
		.setDescription('Whether or not the echo should be embedded')
	); 
