const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => {

  if(!message.guild) return message.channel.send(`I cannot execute this command in DMs`)

    let mem = message.guild.members.cache
      .filter((m) => !m.user.bot)
      .sort((a, b) => a.user.createdAt - b.user.createdAt)
      .first();
    const Embed = new Discord.MessageEmbed()
    .setTitle(`Oldest Member in \`${message.guild.name}\``)
    .setColor(`#ff8400`)
    .setDescription(`The oldest user in **${message.guild.name}** is **${mem.user.tag}**`)
    message.channel.send(Embed);
  }
        


    module.exports.help = {
        name: "oldest",
        aliases: []
    }