import {readyHandler} from './events-handeling/ready.js'
import interactionCreatehandeler  from './events-handeling/interactionCreated.js';
import client from './client/client.js';
import dotenv from "dotenv" ;

dotenv.config(({path:'/home/jamal/web/discord/bots/src/.env'}));
client.login(process.env.token).catch((err) => console.log(err,'the token has to change'));



client.once('ready', readyHandler);


client.on("interactionCreate", interactionCreatehandeler);

