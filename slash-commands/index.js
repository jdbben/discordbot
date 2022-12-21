import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { Client, Collection, Events, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder} from 'discord.js';
import dotenv from "dotenv" ;
dotenv.config();
import { dirname } from 'path';
import { fileURLToPath } from 'url';
//import { data } from './commands/button';
//console.log(process.env.token)
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.login(process.env.token);



const __dirname = dirname(fileURLToPath(import.meta.url));

client.commands = new Collection();
const commandsPath = join(__dirname, 'commands');
const commandFiles = readdirSync(commandsPath).filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
	const filePath = join(commandsPath, file);
	const command = import(filePath);
	client.commands.set(command.data, command);
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

