const Discord=require("discord.js")
exports.run=(client, message, args) => {
    let reason = args.join(' ')
    if (reason.length < 1) return message.channel.send(`Please provide your suggestion after the command!`)
   const embed= new Discord.MessageEmbed()
   .setColor(`#FF00FF`)
   .setTitle("Thanks For Suggesting!")
   .addField(`Your Suggestion:`, reason)
  message.channel.send(embed)

  client.users.cache.get("542515593727705099").send(" Suggestion by " + message.author.tag + " \n\nSuggestion: " + reason );
}

module.exports.help = {
    name: "suggest",
    aliases: []
}
