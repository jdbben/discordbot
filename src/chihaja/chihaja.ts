import { readdirSync } from 'node:fs';
import { join } from 'node:path';



const commandsPath:string = join('/home/jamal/web/discord/bots/dist/', 'commands');
const commandFiles:Array<string> = readdirSync(commandsPath);

export  {commandsPath,commandFiles}

