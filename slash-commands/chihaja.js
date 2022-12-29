import { readdirSync } from 'node:fs';
import { join } from 'node:path';


import dotenv from "dotenv" ;
dotenv.config();
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const commandsPath = join(__dirname, 'commands');
const commandFiles = readdirSync(commandsPath);

export  {commandsPath,commandFiles}