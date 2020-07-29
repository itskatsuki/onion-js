let Discord = require('discord.js');
const { YOUTUBE_API_KEY } = require("../config.json");
const ytdl = require("ytdl-core");
const YoutubeAPI = require("simple-youtube-api");
const youtube = new YoutubeAPI(YOUTUBE_API_KEY);
const search = require('yt-search');


module.exports.run = async (bot, message, args, ops) => {

    voiceChannel = message.member.voice.channel;
    if(!voiceChannel)
        return message.channel.send("You are not in a voice channel");

    const reason = args.join(" ");
    if (reason.length < 1) return message.channel.send("Didnt provide anything after the command")
    search(args.join(''), function(err, res){
        if(err)
            return message.channel.send("There was a problem with JavaScript, please contact a developer to get this fixed as soon as possible.");
        let videos = res.videos.slice(0,10);

        let resp = '';
        for(var i in videos){
            resp += `[${parseInt(i)+1}]** \`${videos[i].title}\`\n`;
        }

        resp += `Did you see the list??`;
        message.channel.send(resp);
    })
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