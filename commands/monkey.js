const Discord = require("discord.js");
const fetch = require('node-fetch');

module.exports.run = async (bot, message, args) => {

    fetch(`https://meme-api.herokuapp.com/gimme/monkeys`)
    .then(res => res.json())
    .then(json => {
        let embed = new Discord.MessageEmbed()
                    .setTitle('A Monkey!')
                    .setColor(`#FF00FF`)
                    .setImage(json.url)

                    message.channel.send(embed)

    })
}

module.exports.help = {
    name: "monkey",
    aliases: []
  };