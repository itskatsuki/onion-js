const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {

    var diceChoices = ['1', '2', '3', '4', '5', '6']
  const diceEmbed = new Discord.MessageEmbed()
  .setColor(`#FF00FF`)
  .setThumbnail(`https://media.discordapp.net/attachments/696772245166620774/703708017060741290/61b-72BcowML.png`)
  .setTitle(`The dice landed on ${diceChoices[Math.floor(Math.random () * diceChoices.length)]}`)

  message.channel.send(diceEmbed)

}
    module.exports.help = {
        name: "dice",
        aliases: []
      };