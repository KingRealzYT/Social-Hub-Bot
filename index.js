const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


const { prefix, token, bot_info } = require('./config.json');

client.once('ready', () => {
    console.log(bot_info);
    console.log('Social Bot Online!');

});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    if(!client.commands.has(command)) return;
    try {
        client.commands.get(command).execute(message, args);
    }catch(error) {
        console.error(error);
        message.reply('There was an issue executing that command!');
    }

});

client.login(token);

for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
