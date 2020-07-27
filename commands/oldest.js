const Discord = require("discord.js")
const bot = new Discord.Client();

module.exposrts.run = async (bot, message, args) => {

    if(!message.guild) return message.channel.send(`This command can only be used in a server.`)

    let mem = message.guild.members.cache
    .filter((m) => !m.user.bot)
    .sort((a, b) => a.user.createdAt - b.user.createdAt)
    .first();

    const embed = new Discord.MessageEmbed()
    .setColor(`#FF00FF`)
    .setTitle(`Oldest Member in ${message.guild.name}!`)
    .setDescription(`Oldest Member: **${mem.user.tag}** `)
    message.channel.send(embed)
}

module.exports.help = {
    name: 'oldest',
    aliases: []
}