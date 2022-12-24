import { Client, GatewayIntentBits, Collection ,Events} from 'discord.js';
import {commandsPath,commandFiles} from '/home/jamal/web/discord/bots/slash-commands/chihaja.js'
import { join } from 'node:path';
import dotenv from "dotenv" ;
dotenv.config();


const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.login(process.env.token);

client.commands = new Collection();

for (const file of commandFiles) {
	const filePath = join(commandsPath, file); 
	const command = await import(filePath);
	client.commands.set(command.data.name, command);
}
const interactionCreatehandeler =  async interaction => {
	if (!interaction.isChatInputCommand()) return;
	const command = client.commands.get(interaction.commandName);

	if (!command) return;
	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
	
}
export {interactionCreatehandeler}