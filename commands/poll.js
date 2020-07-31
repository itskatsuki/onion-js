const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = (client, message, args) => {
           const sayMessage = args.join(" ");
     if (sayMessage.length < 1) return message.channel.send('No Poll After The Command')
       const embed = new Discord.MessageEmbed()
       .setColor(`#FF00FF`)
       .setAuthor(`Poll by ${message.author.username}`)
       .setDescription(`${sayMessage}`)
       

       if (message.guild.me.hasPermission("MANAGE_MESSAGES")) {
          message.delete();
        } 
        message.channel.send(embed).then(m => {
            m.react('👍');
            m.react('👎');
           })
      
}

module.exports.help = {
    name: "poll",
    aliases: []
  };
   
