const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits,ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');


const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
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