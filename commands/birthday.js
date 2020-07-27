const Discord = require("discord.js");
const moment = require("moment");
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => {
    
    let user = message.mentions.users.last();
    if(!args[0]) {
        user = message.author
      }
   if(!user) user = message.author;
   
    let x = Date.now() - user.createdAt; 
    let y = Date.now() - message.guild.members.cache.get(user.id).joinedAt; 
    let created = Math.floor(x / 86400000); 
    let joined = Math.floor(y / 86400000);
    
    const member = message.guild.member(user);
    let nickname = member.nickname !== undefined && member.nickname !== null ? member.nickname : "None"; 
    let createdate = moment.utc(user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss"); 
    let joindate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss"); 
    let status = user.presence.status; 
    let avatar = user.avatarURL({size: 2048}); 
    
    const embed = new Discord.MessageEmbed()
    .setTitle(user.username + '\'s Discord Birthday ')
    .setThumbnail(avatar)
    .setColor(`#FF00FF`)
    .setDescription( `${createdate} \nsince ${created} day(s) ago`)
    
    message.channel.send(embed);

}
        


    module.exports.help = {
        name: "birthday",
        aliases: []
    }