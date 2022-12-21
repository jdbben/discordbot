import { Client, Collection, Events, GatewayIntentBits } from 'discord.js';
import { SlashCommandBuilder } from 'discord.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
export const data = new SlashCommandBuilder()
    .setName('guide')
    .setDescription('Search discordjs.guide!')
    .addStringOption(option => option.setName('query')
        .setDescription('Phrase to search for')
        .setAutocomplete(true));
export async function autocomplete(interaction) {
    const focusedValue = interaction.options.getFocused();
    const choices = ['Popular Topics: Threads', 'Sharding: Getting started', 'Library: Voice Connections', 'Interactions: Replying to slash commands', 'Popular Topics: Embed preview'];
    const filtered = choices.filter(choice => choice.startsWith(focusedValue));
    await interaction.respond(
        filtered.map(choice => ({ name: choice, value: choice }))
    );
}
  