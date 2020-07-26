const Discord = require("discord.js");
const fetch = require('node-fetch')
module.exports.run = async (client, message, args) => {
    fetch(`https://official-joke-api.appspot.com/random_joke`)
    .then(res => res.json())
              .then(json => {
                let jokeEmbed = new Discord.MessageEmbed()
                .setTitle(json.setup)
                .setColor(`#FF00FF`)
                .setDescription(`||${json.punchline}||`)
                
                message.channel.send(jokeEmbed);
              })
}

module.exports.help = {
    name: "joke",
    aliases: []
  };