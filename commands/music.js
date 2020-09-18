const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


const { prefix, token, bot_info } = require('./config.json');

// Music
const { Player } = require('discord-player');
const player = new Player(client);
client.player = player;

bot.on("message", async message => {
    const prefix = '/';

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'play') {
        let track = await bot.player.play(message.member.voice.channel, args[0], message.member.user.tag);
        message.channel.send(`Currently playing ${track.name}! - Requested by ${track.requestedBy}`);
    }

    if (command === 'stop') {
        let track = await bot.player.stop(message.guild.id);
        message.channel.send(`Stopped`);
    }
})
