const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {

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
  
const successMsg = await message.channel.send(`Success! I have deleted **${amount}** message(s)`)
successMsg.delete({ timeout: 2000 });

}
    module.exports.help = {
        name: "clear",
        aliases: []
      };