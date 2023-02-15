import type { Command } from "../types/types";

const data: Command = {
  name: "ping",
  description: "Replies with server ping .!",
  async execute(interaction) {
    await interaction.reply({
      content: `${Date.now() - interaction.createdTimestamp} ms`,
      ephemeral: true,
    });
  },
};

export {data};