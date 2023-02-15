import { CommandInteraction, ApplicationCommandData } from "discord.js";

type CommadOptions = {
  type: string;
  name: string;
  required: boolean;
  description: string;
  options?: 
    {
        name: string;
        description: string;
        type: number;
        required: boolean;
    }

};

export type Command = {
  execute: (type: CommandInteraction) => Promise<void>;
} & ApplicationCommandData;