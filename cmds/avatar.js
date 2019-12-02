module.exports.run = async (Tag, msg, args) => {
    const Discord = require('discord.js');
    let member;
    if (args[0]) {
        member = msg.mentions.members.first() ||
            (msg.guild.members.get(args[0]) ||
                msg.guild.members.find(m => m.user.username.toLowerCase().includes(args[0].toLowerCase())) ||
                msg.guild.members.find(m => m.displayName.toLowerCase().includes(args[0].toLowerCase())))
    } else {
        member = msg.member;
    }
    var num = Math.floor(Math.random() * 9000000) + 1000000;
    const avasend = new Discord.RichEmbed()
        .setAuthor(`Avatar for ${member.user.username}`, msg.guild.iconURL)
        .setColor(num)
        .setImage(member.user.avatarURL)
        .setDescription('looks gay af')

    msg.channel.send({
        embed: avasend
    });
}

module.exports.help = {
    name: 'avatar',
    description: 'Sends yours or another user\'s current avatar in the channel',
    usage: 'avatar, !avatar [member]'
}

module.exports.conf = {
    aliases: ['av']
}