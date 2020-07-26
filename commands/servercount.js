const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });
exports.run = (client, message, args) => {
     let reason = args.join(' ');
    const embed = new Discord.MessageEmbed()
    .setColor(`#FF00FF`)
    .setTitle( "Onion is in **" + client.guilds.cache.size + "** servers.")
    .setThumbnail('https://images-ext-2.discordapp.net/external/asjcA-nYOUimFTOPMc863-KhujSPQwYjBA934jqukNQ/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/736743373410664529/9eb1f39eb00dc7b9a172440f9ac2ccbf.webp?width=678&height=678')
    .setTimestamp()

    message.channel.send({embed})
}

module.exports.help = {
  name: "servercount",
  aliases: []
};