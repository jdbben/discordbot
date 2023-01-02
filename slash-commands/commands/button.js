import { SlashCommandBuilder ,ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder} from 'discord.js';
import i from '/home/jamal/web/discord/bots/OAuth2/index.js'
 const data = new SlashCommandBuilder()
    .setName('button')
    .setDescription('add button click me');
    async function execute(interaction){
  
      const row = new ActionRowBuilder()
         .addComponents(
            new ButtonBuilder()
              .setLabel('Click me!')
              .setStyle(ButtonStyle.Link)
              .setURL('https://discord.com/api/oauth2/authorize?client_id=1044987838351015968&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=code&scope=identify')
 
              );
     const embed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Some title')
        .setURL('https://discord.js.org')
        .setDescription('Some description here')
        ;

     await interaction.reply({ content: 'I think you should,', ephemeral: true, embeds: [embed], components: [row] });
           return
         }

    export {data,execute}