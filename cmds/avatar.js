module.exports.run = async(Tag, msg, args) => {
    const Discord = require('discord.js');
    let men = msg.mentions.users.first()
    if (!men) men = msg.author;
    var num = Math.floor(Math.random() * 9000000) + 1000000;
    const avasend = new Discord.RichEmbed()
    .setAuthor(`Avatar for ${men.username}`, msg.guild.iconURL)
    .setColor(num)
    .setImage(men.avatarURL)
    .setDescription('looks gay af')

    msg.channel.send({embed: avasend})
}

module.exports.help = {
    name: 'avatar'
}