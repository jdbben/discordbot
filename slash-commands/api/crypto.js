import fetch from 'node-fetch';
import dotenv from "dotenv";
dotenv.config();


const  gettheprice= async (asset)=> {
  
const option ={
  "method" : 'GET',
  "headers": {'X-CoinAPI-Key': process.env.ckey },
};
const response = await fetch(`https://rest.coinapi.io/v1/exchangerate/${asset}/USD`, option) 

const data = await response.json();
return data
}
export { gettheprice }