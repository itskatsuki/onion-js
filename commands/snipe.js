const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    if(!message.guild) return message.channel.send(`This command must be in a server.`)

    try {
        const msg = bot.snipes.get(message.channel.id)
        if(!msg) return message.channel.send(`There are no deleted messages in this guild.`)
        const embed = new Discord.MessageEmbed()
        .setColor(`#FF00FF`)
        .setTitle(`Snipe!`)
        .addField(`Message Author`, msg.author)
        .addField(`Content`, msg.content)
        if(msg.image)embed.setImage(msg.image)

        message.channel.send(embed)
    } catch (err) {
        return message.channel.send(`A **JavaScript** error has occured, please let the developer know about this.`)
    }
}

module.exports.help = {
    name: "snipe",
    aliases: []
}