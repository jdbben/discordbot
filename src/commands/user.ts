import type { Command } from '../types/types';

const data: Command = {
  name: 'user',
  description: 'Provides information about the user!!.',
  async execute(interaction) {
    await interaction.reply(`This command was run by ${interaction.user.username}, who joined on .`);
  },
};

export { data };
