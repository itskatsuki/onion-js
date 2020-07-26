const Discord = require("discord.js");
const fetch = require('node-fetch');
const { RichEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) => {

    const subreddit = args.join(" ");
    if(!subreddit) return message.channel.send('You didn\'t provide a subreddit after the command.')
  
    fetch(`https://meme-api.herokuapp.com/gimme/${subreddit}`)
    .then(res => res.json())
    .then(json => {
      let redditEmbed = new Discord.MessageEmbed()
      .setColor(`#FF00FF`)
      .setTitle(json.title)
      .setURL(json.postLink)
      .setImage(json.url)
      .addField("Subreddit:", json.subreddit)
  
      let errMessage = json.message;
      if(json.message) return message.channel.send(`This subreddit doesn't exist or has too little posts.`)
      message.channel.send(redditEmbed)
    })
            


};

module.exports.help = {
  name: "reddit",
  aliases: []
};