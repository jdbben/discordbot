import { Client, Collection } from 'discord.js';
import { Command } from '../types/types';

const client: Client & { commands?: Collection<string, Command> } = new Client({
  intents: ['DirectMessages', 'GuildMessages', 'Guilds'],
});

export default client;
