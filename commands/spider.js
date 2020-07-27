const Discord = require("discord.js");
const fetch = require('node-fetch');

module.exports.run = async (bot, message, args) => {



        fetch(`https://meme-api.herokuapp.com/gimme/spiders`)
            .then(res => res.json())
            .then(json => {
                let embed = new Discord.MessageEmbed()
                    .setTitle('A Creepy Spider!')
                    .setColor(`#FF00FF`)
                    .setImage(json.url)
                    
                message.channel.send(embed)

    })
};

module.exports.help = {
  name: "spider",
  aliases: []
}