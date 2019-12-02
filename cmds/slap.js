module.exports.run = async (Tag, msg, args) => {
    const Discord = require('discord.js');
    const slapee = msg.mentions.members.first();
    if (slapee) {
        const slapsend = new Discord.RichEmbed()
            .setAuthor(slapee.user.username, slapee.user.avatarURL)
            .setColor(0xff0000)
            .setImage('https://media.giphy.com/media/3XlEk2RxPS1m8/giphy.gif')
            .setTitle(`IMA SLAP YOU SILLY`)
        msg.delete();
        msg.channel.send({
            embed: slapsend
        })
    } else if (!slapee) {
        msg.channel.send('https://media.giphy.com/media/12o2XMrIDuaXg4/giphy.gif')
    }
}

module.exports.help = {
    name: "slap"
}

module.exports.conf = {
    aliases: ['drake']
}