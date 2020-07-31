const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
    const prefix = "?"
    let helpEmbed = new Discord.MessageEmbed()
  .setColor(`#FF00FF`)
  .setTitle(`Commands List!`)
  .addField(`Prefix:`, prefix)
  .addField(`Fun:`, `\`\`\`${prefix}meme, ${prefix}snipe, ${prefix}tweet, ${prefix}meme, ${prefix}cleanmeme, ${prefix}8ball, ${prefix}dice, ${prefix}reddit, ${prefix}joke, ${prefix}coinflip, ${prefix}nou, ${prefix}woah, ${prefix}dumbrate, ${prefix}monkey\`\`\``)
  .addField(`Moderation:`, `\`\`\`${prefix}clear, ${prefix}ban, ${prefix}kick\`\`\``)
  .addField(`Music`, `\`\`\`${prefix}play, ${prefix}stop\`\`\``)
  .addField(`Information:`, `\`\`\`${prefix}help, ${prefix}math, ${prefix}avtar, ${prefix}ping, ${prefix}servercount, ${prefix}about\`\`\``)
  .addField(`Other:`, `\`\`\`${prefix}status, ${prefix}suggest, ${prefix}uptime\`\`\``)
  message.channel.send(helpEmbed)
}

module.exports.help = {
    name: "help",
    aliases: []
  };