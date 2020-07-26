const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = (client, message, args) => {
      const embed = new Discord.MessageEmbed()
    .setColor(`#FF00FF`)
    .setTitle(`${message.author.username} said 'Woah'!`)
    .setImage("https://media.giphy.com/media/sEms56zTGDx96/source.gif")

    message.channel.send({embed})
}

module.exports.help = {
  name: "woah",
  aliases: []
};


