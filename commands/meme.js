const Discord = require("discord.js");
const fetch = require('node-fetch');
const { RichEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) => {

  let embed1 = new Discord.MessageEmbed()



 
        fetch('https://meme-api.herokuapp.com/gimme/dankmemes')
            .then(res => res.json())
            .then(json => {
                let embed = new Discord.MessageEmbed()
                    .setTitle(json.title)
                    .setColor(`#FF00FF`)
                    .setURL(`${json.postLink}`)
                    
                    .setImage(json.url)
                    .addField("Subreddit:", `${json.subreddit}`)
                    
                message.channel.send(embed).then(m => {
                    m.react('👍');
                    m.react('👎');
                   })
            });

            


};

module.exports.help = {
  name: "meme",
  aliases: []
};