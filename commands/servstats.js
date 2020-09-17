module.exports = {
    name: 'servstats',
    description: 'Server Stats Command',
    execute(message, args) {
        message.channel.send(message.guild.name),
        message.channel.send(`Total Members: ${message.guild.memberCount}`);
    },
};