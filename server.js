const Discord = require("discord.js");
const fetch = require("node-fetch")
const fs = require('fs')


bot = new Discord.Client();

bot.on("ready", () => {
  console.log(`AYyyyyyy basil!! I logged in as ${bot.user.tag}`);//<- this is what it says when the code works
  bot.user.setActivity(`?help`);//<-thats status
});

const prefix = "?"

bot.on("message", async message => {

  let literal = message.content
  message.content = literal.toLowerCase()

  
let messageArray = message.content.split(" ");
let command = messageArray[0].toLowerCase();
let args = messageArray.slice(1);


if(!message.content.startsWith(prefix)) return;

if(message.content.startsWith(`${prefix}test`)) {
message.channel.send('ayyy the test worksss')
}

//second command, avatar
if(message.content.startsWith(`${prefix}avatar`)){
  let user = message.mentions.users.first();
  if(!user) user = message.author;
  const avatarEmbed = new Discord.MessageEmbed()
  .setColor(`#FF00FF`)
  .setTitle(`This is the avatar of ${user.tag}`)
  .setImage(user.avatarURL({size: 4096}))
  .setFooter(`Requested by ${message.author.tag}`)

  message.channel.send(avatarEmbed);
}

if(message.content.startsWith(`${prefix}clear`)){
  const amount = args.join(" ");
  if(!message.guild) return message.channel.send('I cannot execute this command in direct messages.')
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    return message.channel.send('It looks like you dont have the "Manage Messages" permission.')
  }
  if(isNaN(amount)) return message.channel.send('That\'s not a number!')

  if(!amount) return message.channel.send('Please provide a number from 1 to 100 after the command.')
  if(amount > 100) return message.channel.send('I cannot delete more than 100 messages at a time.')
  if(amount < 1) return message.channel.send(`I cannot delete less than one message.`)
  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    return message.channel.send('I dont have permissions to delete messages, please give me the Manage Messages permission.')
  }
    await message.channel.messages.fetch({limit: amount}).then(messages => {
      message.channel.bulkDelete(amount 
)});
  
const successMsg = await message.channel.send(`Success! I have deleted ${amount} message(s)`)
successMsg.delete({ timeout: 2000 });
}

if(message.content.startsWith(`${prefix}coinflip`)){
let reason = args.join(' ');

let itsHeads = new Discord.MessageEmbed()
.setColor(`#FF00FF`)
    .setTitle("Heads!")
    .setImage("https://media.discordapp.net/attachments/714606744822743152/716132147798343730/image-removebg-preview.png")
    .setFooter(`Coin flipped by ${message.author.tag} `)

let itsTails = new Discord.MessageEmbed()
.setColor(`#FF00FF`)
    .setTitle("Tails!")
    .setImage("https://cdn.discordapp.com/attachments/716691761250041870/722538273800716468/146-1464848_quarter-tail-png-tails-on-a-coin.png")
    .setFooter(`Coin flipped by ${message.author.tag} `)

    var ball = [itsHeads, itsTails];

    message.channel.send(ball[Math.floor(Math.random () * ball.length)])
}

if(message.content.startsWith(`${prefix}8ball`)){
  let ballReason = args.join(' ')
  if(!ballReason) return message.channel.send('You didn\'t provide a question after the command. \n Example: **?8ball {your question here}**')


  var ballChoices = ['What do you think? NO!', 'What do you think? OF COURSE!', 'Definitely!', 'Definitely not.', 'Yes.', 'No.', 'I cannot tell', 'Ask a friend', 'You shall not know']
  
  const ballEmbed = new Discord.MessageEmbed()
  .setColor(`#FF00FF`)
  .setThumbnail(`https://images-ext-2.discordapp.net/external/Q-8CPB8TfvLH8hIOzNeoBD8ZazWXEZOG8e1wQsUB3C8/https/magic-8ball.com/assets/images/magicBallStart.png`)
  .addField(`${message.author.username} Asked:`, ballReason)
  .addField(`Onion Says`, ballChoices[Math.floor(Math.random () * ballChoices.length)])

  message.channel.send(ballEmbed)
}

if(message.content.startsWith(`${prefix}dice`)){
  var diceChoices = ['1', '2', '3', '4', '5', '6']
  const diceEmbed = new Discord.MessageEmbed()
  .setColor(`#FF00FF`)
  .setThumbnail(`https://media.discordapp.net/attachments/696772245166620774/703708017060741290/61b-72BcowML.png`)
  .setTitle(`The dice landed on ${diceChoices[Math.floor(Math.random () * diceChoices.length)]}`)

  message.channel.send(diceEmbed)
}

if(message.content.startsWith(`${prefix}reddit`)){
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
}

if(message.content.startsWith(`${prefix}meme`)){
  fetch(`https://meme-api.herokuapp.com/gimme/dankmemes`)
  .then(res => res.json())
  .then(json => {
    let memeEmbed = new Discord.MessageEmbed()
    .setColor(`#FF00FF`)
    .setTitle(json.title)
    .setURL(json.postLink)
    .setImage(json.url)

    if(json.message) return message.channel.send(`This subreddit doesn't exist or has too little posts.`)
    message.channel.send(memeEmbed)
  })
}

if(message.content.startsWith(`${prefix}joke`)){
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

if(message.content.startsWith(`${prefix}help`)) {
  let helpEmbed = new Discord.MessageEmbed()
  .setColor(`#FF00FF`)
  .setTitle(`Commands List!`)
  .addField(`Prefix:`, prefix)
  .addField(`Fun:`, `\`\`\`${prefix}meme, ${prefix}8ball, ${prefix}dice, ${prefix}reddit, ${prefix}joke\`\`\``)
  .addField(`Moderation:`, `\`\`\`${prefix}clear\`\`\``)
  .addField(`Developer:`, `\`\`\`${prefix}test\`\`\``)

  message.channel.send(helpEmbed)
  }

})

bot.login("NzM2NzQzMzczNDEwNjY0NTI5.XxzPvA.qbVU21C1FUNAHiw4Ucpak4kf210")