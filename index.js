
const discord = require("discord.js");
const fs = require("fs");
const config = require("./config.json");
const bot = new discord.Client({ disableEveryone: true });
const { join } = require("path");
const { triggerAsyncId } = require("async_hooks");

bot.on("ready", async () => {
  console.log(` ✅  I Have Successfully Logged into Discord as ${bot.user.tag}`);
  bot.user.setActivity("?help", {type: 'PLAYING'});
});

let activities = [
    `${bot.guilds.cache.size} servers!`,
    `${bot.channels.cache.size} channels!`,
    `${bot.users.cache.size} users!`
  ],
  i = 0;

bot.commands = new discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");

  if (jsfiles.length <= 0)
    return console.log("There are no commands to load...");

  console.log(`Loading ${jsfiles.length} commands...`);
  jsfiles.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${i + 1}- ${f} has loaded successfully!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.active= new Map();


bot.snipes = new Map();
bot.on("messageDelete", function(message, channel) {
  bot.snipes.set(message.channel.id, {
    content: message.content,
    author: message.author.tag,
    image: message.attachments.first()
      ? message.attachments.first().proxyURL
      : null
  });
});



bot.on("message", async message => {


  

  const prefix = "?"
  let messageArray = message.content.split(" ");
  let command = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);

  var literal = message.content;
  if (message.mentions.users.has(bot.user.id)){
    if (!command.startsWith(prefix)){
    let sliceFirst = literal.slice(23)
    message.content = prefix + sliceFirst
    messageArray = message.content.split(" ");
    command = messageArray[0].toLowerCase();
    args = messageArray.slice(1);
  }
}

  
  if (command.startsWith(prefix)){
  let cmd = bot.commands.get(command.slice(prefix.length));
  if (cmd) cmd.run(bot, message, args);
  }
});


  bot.login(config.token)