const discord = require("discord.js");
const bot = new discord.Client();

module.exports.run = async (bot, message, args) => {


    const sayMessage = args.join(" ");

    if(!sayMessage){
        message.channel.send("Please provide the status that you want after the command.")
    }

    const text = args.slice(1).join(' ');
    const typeFirst = args[0]
    const typeSecond = typeFirst.toUpperCase()



    if (message.author.id == "542515593727705099") {
        bot.user.setActivity(text, {type: typeSecond});
        const setEmbed = new discord.MessageEmbed()
        .setColor(`#FF00FF`)
        .setTitle(`New Status!`)
        .setDescription(`I have set the status type to \`${typeSecond}\`\n\n I have set the status message to \`${text}\``)
        message.channel.send(setEmbed)
      } else {
        message.channel.send("I have detected that you **do not** own this bot. Only the owner can change my status.");
    }




}
module.exports.help = {
    name: "status",
    aliases: []
}