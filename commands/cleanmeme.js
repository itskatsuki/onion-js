const Discord = require("discord.js");
const fetch = require('node-fetch');
const talkedRecently = new Set();

module.exports.run = async (bot, message, args) => {



 
        fetch('https://meme-api.herokuapp.com/gimme/cleanmemes')
            .then(res => res.json())
            .then(json => {
                let embed = new Discord.MessageEmbed()
                    .setTitle(json.title)
                    .setColor(`#FF00FF`)
                    .setURL(`${json.postLink}`)
                    
                    .setImage(json.url)
                    
                message.channel.send(embed).then(m => {
                    m.react('👍');
                    m.react('👎');
                   })
            });

};

module.exports.help = {
  name: "cleanmeme",
  aliases: []
};
