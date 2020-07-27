const ytdl = require('ytdl-core')

module.exports.run = async (bot, message, args) => {
    const active = new Map();

    let ops = {
        active: active
    }

    voiceChannel = message.member.voice.channel;
    if(!voicechannel) return message.channel.send(`Error! You aren't in a voice channel.`)

    let validate = await ytdl.validateURL(args[0])

    if(!validate) return message.channel.send(`That's not a valid URL :(`)

    let info = await ytdl.getInfo(args[0])

    let data = ops.active.get(message.guild.id) || {};

    if(!data.connection)
        data.connection = await message.member.voice.channel.join();
    if(!data.queue)
        data.queue = [];
    data.guildID = message.guild.id

    data.queue.push({
        songTitle: info.videoDetails.title,
        requester: message.author.tag,
        url: args[0],
        announceChannel: message.channel.id
    });

    if(!data.dispatcher) play(bot, ops, data);


        message.channel.send(`:musical_note: Now Playing **${info.videoDetails.title}** | Requested by **${message.author.username}** :musical_note:`);

        

    ops.active.set(message.guild.id, data);
}

async function play(client, ops, data){

    data.dispatcher = await data.connection.play(ytdl(data.queue[0].url, {filter: 'audioonly'}));

    data.dispatcher.guildID = data.guildID;

    data.dispatcher.once('end', function(){
        finish(client, ops, this);
    });
}

function finish(client, ops, dispatcher){
    let fetched = ops.active.get(dispatcher.guildID);

    fetched.queue.shift();

    if(fetched.queue.length > 0){
        ops.active.set(dispatcher.guildID, fetched);

        play(client, ops, fetched);
    }

    else{

        ops.active.delete(dispatcher.guildID);

        let vc = client.guilds.get(dispatcher.guildID).me.voiceChannel;

        if(vc) vc.leave();
    }
}

module.exports.help = {
    name: 'youtube',
    aliases: []
}