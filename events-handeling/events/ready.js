import { Events } from 'discord.js';

const name = Events.ClientReady;
 const once = true;
 function readyHandler (client) {
	console.log(`Ready! Logged in as ${client.user.tag}`);
}
export { readyHandler }