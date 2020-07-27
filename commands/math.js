const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => {

    const reason = args.join(" ")
    if(reason.length < 1) return message.channel.send("Please provide an expression after the command.")

    try {
        const solved = eval(reason).toString();
        let calembed = new Discord.MessageEmbed()
        .setColor(`#ff8400`)
        .setTitle(`Math!`)
        .setDescription(`${reason} = ${solved}`)
        return message.channel.send(calembed)

        let c = "`"

    } catch (err) {
        return message.channel.send(`Please put in a valid mathmatical equation.`)
    }
}

module.exports.help = {
    name: "math",
    aliases: []
}