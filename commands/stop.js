const ytdl = require('ytdl-core')

module.exports.run = async (bot, message, args) => {

    const active = new Map();

    let ops = {
        active: active
    }

    if(!message.member.voice.channel) return message.channel.send(`You aren't in a voice channel.`)
    else {
        message.guild.me.voice.channel.leave();
        message.channel.send(`I disconnected from the voice channel! :onion:`)
    }
}

module.exports.help = {
    name: 'stop',
    aliases: []
}