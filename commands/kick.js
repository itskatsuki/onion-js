const Discord = require("discord.js");
const fs = require ("fs");

module.exports.run =  async (bot, message, args) => {

  if(!message.guild) return message.channel.send(`I cannot execute this command in DMs`)

  let member = message.mentions.members.first() 

    if(!message.member.hasPermission("KICK_MEMBERS")){
        message.channel.send("You don't have the permissions to use this command!");
    }

    else{
        if(!member)
            return message.channel.send("Please mention a valid member that is in this guild");
        if(!member.kickable) 
            return message.channel.send("I cannot kick this user. Do they have a higher role thanme? Do I have permission to kick members?");

        let reason = args.slice(1).join(' ');
        if(!reason) reason = "No Reason";

        member.kick(reason)
            .catch(error => message.channel.send(`A JavaScript error occurred \n \n \`\`\`${error}\`\`\``));
            const readyEmbed = new Discord.MessageEmbed()
            .setColor(`#FF00FF`)
            .setTitle(`${member.user.username} was kicked`)
            .setDescription(`I Kicked **${member.user.tag}**`)
            .addField(`Kicked User ID`, member.id, true)
            .addField(`Kicked By`, message.author.tag, true)
            .addField(`Reason`, reason, true)
        message.channel.send(readyEmbed);
    }
    
    
    
  }

module.exports.help = {
  name: "kick",
  aliases: []
};