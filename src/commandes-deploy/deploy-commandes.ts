import { REST, Routes } from 'discord.js';
import { readdirSync } from 'node:fs';
import dotenv from 'dotenv';
dotenv.config({ path: '/home/jamal/web/discord/bots/src/.env' });

const commands: Array<object> = [];
// Grab all the command files from the commands directory you created earlier
const commandFiles = readdirSync('/home/jamal/web/discord/bots/dist/commands/').filter(file => file.endsWith('.js'));
// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
console.log;
for (const file of commandFiles) {
  const command = await import(`/home/jamal/web/discord/bots/dist/commands/${file}`);
  commands.push(command.data);
}
// Construct and prepare an instance of the REST module
if (process.env.token) {
  const rest = new REST({ version: '10' }).setToken(process.env.token);
  // and deploy your commands!
  (async () => {
    try {
      console.log(`Started refreshing ${commands.length} application (/) commands.`);

      // The put method is used to fully refresh all commands in the guild with the current set
      if (process.env.guildId && process.env.clientId) {
        await rest.put(Routes.applicationGuildCommands(process.env.clientId, process.env.guildId), { body: commands });
      }
      console.log(`Successfully reloaded  application (/) commands.`);
    } catch (error) {
      // And of course, make sure you catch and log any errors!
      console.error(error);
    }
  })();
}
