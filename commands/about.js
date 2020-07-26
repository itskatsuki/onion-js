const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = (client, message, args) => {
     let reason = args.join(' ');

    

    const embed = new Discord.MessageEmbed()
    .setColor(`#FF00FF`)
    .setTitle('About Onion!')
    .setDescription('Onion is a nice and very unique Discord bot designed by **Shadowissick#5361** on JavaScript.')
    .addField("Developer", "Shadowissick#5361", true)
    .addField("Developed on", "JavaScript :coffee: ", true)
    .addField("Ran On", "Node.js v14.6", true)
    .addField("Command List", "?help", true)
    .addField("Hosted on", "NOT HOSTED YET", true)
    .addField("Script Written on", "[Visual Studio Code](https://code.visualstudio.com/)", true)
    .addField("Created on", `Sunday, July 25th 2020`, true)
    .addField("Sevrer Count", `${client.guilds.cache.size} Servers`, true)
    .addField("Support Server", "[Support Server Coming Soon](PAGE NOT FOUND)", true)
    .setTimestamp()
    

    message.channel.send({embed})
}

module.exports.help = {
  name: "about",
  aliases: []
};