import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { Client, Collection, Events, GatewayIntentBits} from 'discord.js';
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
const commandFiles = readdirSync(commandsPath);


for (const file of commandFiles) {
	const filePath = join(commandsPath, file); 
	const command = await import(filePath);
	client.commands.set(command.data.name, command);
}

client.once(Events.ClientReady, () => { 
	console.log('Ready!');
});

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;
	const command = client.commands.get(interaction.commandName);

	if (!command) return;
	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
	
});

