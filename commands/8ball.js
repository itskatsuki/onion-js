const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {

    let ballReason = args.join(' ')
  if(!ballReason) return message.channel.send('You didn\'t provide a question after the command. \n Example: **?8ball {your question here}**')


  var ballChoices = ['What do you think? NO!', 'What do you think? OF COURSE!', 'Definitely!', 'Definitely not.', 'Yes.', 'No.', 'I cannot tell', 'Ask a friend', 'You shall not know']
  
  const ballEmbed = new Discord.MessageEmbed()
  .setColor(`#FF00FF`)
  .setThumbnail(`https://images-ext-2.discordapp.net/external/Q-8CPB8TfvLH8hIOzNeoBD8ZazWXEZOG8e1wQsUB3C8/https/magic-8ball.com/assets/images/magicBallStart.png`)
  .addField(`${message.author.username} Asked:`, ballReason)
  .addField(`Onion Says`, ballChoices[Math.floor(Math.random () * ballChoices.length)])

  message.channel.send(ballEmbed)

}
    module.exports.help = {
        name: "8ball",
        aliases: []
      };