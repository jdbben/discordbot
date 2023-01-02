import { Client, Events, GatewayIntentBits} from 'discord.js';
import dotenv from "dotenv" ;
dotenv.config();
import {readyHandler} from '../events-handeling/events/ready.js'
import { interactionCreatehandeler } from '../events-handeling/events/interactionCreate.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.login(process.env.token);


client.once('ready', readyHandler);


client.on(Events.InteractionCreate, interactionCreatehandeler);

