const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {

    let reason = args.join(' ');

let itsHeads = new Discord.MessageEmbed()
.setColor(`#FF00FF`)
    .setTitle("Heads!")
    .setImage("https://media.discordapp.net/attachments/714606744822743152/716132147798343730/image-removebg-preview.png")
    .setFooter(`Coin flipped by ${message.author.tag} `)

let itsTails = new Discord.MessageEmbed()
.setColor(`#FF00FF`)
    .setTitle("Tails!")
    .setImage("https://cdn.discordapp.com/attachments/716691761250041870/722538273800716468/146-1464848_quarter-tail-png-tails-on-a-coin.png")
    .setFooter(`Coin flipped by ${message.author.tag} `)

    var ball = [itsHeads, itsTails];

    message.channel.send(ball[Math.floor(Math.random () * ball.length)])


}
    module.exports.help = {
        name: "coinflip",
        aliases: []
      };