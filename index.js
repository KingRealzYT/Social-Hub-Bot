const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token, bot_info } = require('./config.json');

client.once('ready', () => {
    console.log(bot_info);
    console.log('Social Bot Online!');

});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    if(message.content === `${prefix}ping`) {
        message.channel.send(`**Pong!**`);
    } else if(message.content === `Hi`) {
        message.channel.send('Hey!');
    } else if(message.content === `${prefix}servname`) {
        message.channel.send(message.guild.name);
        message.channel.send(`Total Members: ${message.guild.memberCount}`)
    } else if(message.content === `${prefix}profile`) {
        message.channel.send(`Username: ${message.author.username}`),
        message.channel.send(`Date Account Made: ${message.author.createdAt}`),
        message.channel.send(`ID: ${message.author.id}`),
        message.channel.send(`Avatar: ${message.author.displayAvatarURL()}`);
    }
});

client.login(token);
