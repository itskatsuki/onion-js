const Discord = require("discord.js");
const bot = new Discord.Client();
const Canvas = require('canvas');
module.exports.run = async (bot, message, args) => {


  
  const sayMessage = args.join(" ");
  if (sayMessage.length < 1) return message.channel.send("Didnt provide anything to place inside your tweet")

  message.channel.send("Posting your tweet...")
  
  const applyText = (canvas, text) => {
    const ctx = canvas.getContext('2d');
    let fontSize = 70;

    do {
        ctx.font = `${fontSize -= 10}px Helvetica`;
    } while (ctx.measureText(text).width > canvas.width - 300);

    return ctx.font;
};

  
  const canvas = Canvas.createCanvas(1284, 673);
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/714606744822743152/717779540369473618/unknown.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    ctx.font = '28px Helvetica';
    ctx.fillStyle = '#000000';
    ctx.fillText(sayMessage, canvas.width / 6.5, canvas.height / 4.3);

    ctx.font = applyText(canvas, ``);
    ctx.fillStyle = '#000000';
    ctx.fillText(`@${message.author.username}`, canvas.width / 6.5, canvas.height / 8);

    const avatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'jpg' }));
    ctx.drawImage(avatar, 30, 30, 125, 125);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'tweet-image.png');
  const embed = new Discord.MessageEmbed()
       .setColor(`#ff8400`)
       .setImage(attachment)
       

  

    message.channel.send(attachment);

    
}
  
module.exports.help = {
    name: "tweet",
    aliases: []
  };