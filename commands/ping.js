const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {

  const msg = await message.channel.send('Pinging...');

  const latency = msg.createdTimestamp - message.createdTimestamp;

  const embed = new Discord.MessageEmbed()
  .setColor(`#FF00FF`)
  .setTitle(`Pong!`)
  .setThumbnail(`https://media.discordapp.net/attachments/714606744822743152/718097140966227968/table-tennis-paddle-and-ball_1f3d3.png`)
  .setDescription(msg.createdTimestamp - message.createdTimestamp + "ms")



    
  msg.edit(embed)

  }



module.exports.help = { 
  name: "ping",
  aliases: []
};