import fetch from 'node-fetch';
import dotenv from "dotenv";
dotenv.config(({ path: '/home/jamal/web/discord/bots/src/.env' }));

const ckey = process.env.ckey

const  gettheprice= async (asset:string): Promise<{ rate: number }>=> {
  interface Option {
   method:string,
   headers: any
  }
const option :Option={
  "method" : 'GET',
  "headers": {'X-CoinAPI-Key':ckey},
};
const response = await fetch(`https://rest.coinapi.io/v1/exchangerate/${asset}/USD`, option) 

const data = await response.json();
return data as { rate: number };
}
export { gettheprice }