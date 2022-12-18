const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits,ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder,ComponentType, InteractionCollector } = require('discord.js');
const { token } = require('./config.json');
const { execute } = require('./commands/ping');


const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);

}

client.once(Events.ClientReady, () => { 
	console.log('Ready!');
});

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;
	// console.log(client.commands)
	// return
	const command = client.commands.get(interaction.commandName);
	if (interaction.commandName === 'button') {
		 const row = new ActionRowBuilder()
		 	.addComponents(
		 		new ButtonBuilder()
					.setCustomId('primary')
					.setLabel('Click me!')
					.setStyle(ButtonStyle.Primary)
					//.setEmoji('1044992842432512073')
					//.setDisabled(true)
					,
					
			);
		const embed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle('Some title')
			.setURL('https://discord.js.org')
			.setDescription('Some description here')
			;

		await interaction.reply({ content: 'I think you should,', ephemeral: true, embeds: [embed], components: [row] });
				return
	}
	if (interaction.commandName === 'city') {
		console.log(city)
	}
	
	if (!command) return;
	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
	
});
client.login(token);