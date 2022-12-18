const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('../config.json');
const commandId = "1049402999254040706"
const rest = new REST({ version: '10' }).setToken(token);
rest.delete(Routes.applicationGuildCommand(clientId, guildId, commandId))
	.then(() => console.log('Successfully deleted guild command'))
	.catch(console.error);

// for global commands
rest.delete(Routes.applicationCommand(clientId, commandId))
	.then(() => console.log('Successfully deleted application command'))
	.catch(console.error);
;