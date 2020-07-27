let Discord = require('discord.js');
const { YOUTUBE_API_KEY } = require("../config.json");
const ytdl = require("ytdl-core");
const YoutubeAPI = require("simple-youtube-api");
const youtube = new YoutubeAPI(YOUTUBE_API_KEY);


module.exports.run = async (bot, message, args, ops) => {

    voiceChannel = message.member.voice.channel;
    if(!voiceChannel)
        return message.channel.send("You are not in a voice channel");

    const reason = args.join(" ");
    if (reason.length < 1) return message.channel.send("Didnt provide anything after the command")
        

    let songData1 = null;
    let song1 = null;

     
        const result1 = await youtube.searchVideos(reason, 1)
        songData1 = await ytdl.getInfo(result1[0].url)
         song1 = {
          title: songData1.title,
          url: songData1.video_url,
          duration: songData1.length_seconds
        };



            const commandFile = require ("../youtube.js");
            commandFile.run(bot, message, [songData1.video_url], ops);
            
            

            
        }

    

module.exports.help = {
    name: 'play',
    aliases: []
} 