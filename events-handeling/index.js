import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { Client, Collection, Events, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import { token } from './config.json';


const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const commandsPath = join(__dirname, 'commands');
const commandFiles = readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command); // yk glt lik 7ayd hadi 
	 //client.guilds.cache.forEach((guild) => guild.commands.set([]));

}

client.once(Events.ClientReady, () => { 
	console.log('Ready!');
});

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);
	if (interaction.commandName === 'button') {
		const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('primary')
					.setLabel('Click me!')
					.setStyle(ButtonStyle.Primary),
			);

		await interaction.reply({ content: 'I think you should,', components: [row] });
	}
	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
	
});
// client.on('interactionCreate', async interaction => {
// 	if (interaction.isChatInputCommand()) {
// 		// command handling
// 	} else if (interaction.isAutocomplete()) {
// 		const command = interaction.client.commands.get(interaction.commandName);

// 		if (!command) {
// 			console.error(`No command matching ${interaction.commandName} was found.`);
// 			return;
// 		}

// 		try {
// 			await command.autocomplete(interaction);
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	}
// })


client.login(token);