const Discord = require("discord.js");

module.exports.run =  async (bot, message, args) => {

  if(!message.guild) return message.channel.send(`The command doesn't work in direct messages.`)

  let member = message.mentions.members.first() 

    if(!message.member.hasPermission("BAN_MEMBERS")){
        message.channel.send("You don't have the permissions to use this command!");
    }

    else{
        if(!member)
            return message.channel.send("Please mention a valid member.");
        if(!member.bannable) 
            return message.channel.send("I cannot ban this user. Do they have a higher role than me? Do I have permission to ban members?");

        let reason = args.slice(1).join(' ');
        if(!reason) reason = "No Reason";

        member.ban({reason: reason})
            .catch(error => message.channel.send(`A JavaScript error occurred \n \n \`\`\`${error}\`\`\``));
            const readyEmbed = new Discord.MessageEmbed()
            .setColor(`#FF00FF`)
            .setTitle(`${member.user.username} was Banned`)
            .setDescription(`Banned **${member.user.tag}**`)
            .addField(`Banned User ID`, member.id, true)
            .addField(`Banned By`, message.author.tag, true)
            .addField(`Reason`, reason, true)
        message.channel.send(readyEmbed);
    }
    
    
    
  }

module.exports.help = {
  name: "ban",
  aliases: []
};