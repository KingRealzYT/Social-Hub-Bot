module.exports = {
    name: 'profile',
    description: 'Profile Command',
    execute(message, args) {
        message.channel.send(`Username: ${message.author.username}`),
        message.channel.send(`Date Account Made: ${message.author.createdAt}`),
        message.channel.send(`ID: ${message.author.id}`),
        message.channel.send(`Avatar: ${message.author.displayAvatarURL()}`);
    },
};