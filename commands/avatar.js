const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {

    let user = message.mentions.users.first();
  if(!user) user = message.author;
  const avatarEmbed = new Discord.MessageEmbed()
  .setColor(`#FF00FF`)
  .setTitle(`This is the avatar of ${user.tag}`)
  .setImage(user.avatarURL({size: 4096}))
  .setFooter(`Requested by ${message.author.tag}`)

  message.channel.send(avatarEmbed);

}
    module.exports.help = {
        name: "avatar",
        aliases: []
      };