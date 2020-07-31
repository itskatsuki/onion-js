const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = (client, message, args) => {
      const embed = new Discord.MessageEmbed()
    .setColor(`#FF00FF`)
    .setTitle(`${message.author.username} just pulled out an Uno reverse card!`)
    .setImage("https://media.giphy.com/media/Wt6kNaMjofj1jHkF7t/source.gif")

    message.channel.send({embed})
}

module.exports.help = {
  name: "nou",
  aliases: []
};