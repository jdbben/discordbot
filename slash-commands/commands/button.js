import { SlashCommandBuilder ,ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder} from 'discord.js';
 const data = new SlashCommandBuilder()
    .setName('button')
    .setDescription('add button click me');
    async function execute(interaction){
      const row = new ActionRowBuilder()
         .addComponents(
            new ButtonBuilder()
              .setCustomId('primary')
              .setLabel('Click me!')
              .setStyle(ButtonStyle.Primary)
              //.setEmoji('1044992842432512073')
              //.setDisabled(true)
              ,
              
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