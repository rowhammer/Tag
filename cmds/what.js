module.exports.run = async(Tag, msg, args) => {
    const Discord = require('discord.js')
    const whatsend = new Discord.MessageEmbed()
        .setTitle('WHAT?!')
        .setImage('https://gfycat.com/SameGiftedHectorsdolphin')
        .setURL('https://www.youtube.com/watch?v=ku4lneTecJA')
    msg.channel.send({embed: whatsend})
}

module.exports.help = {
    name: 'what'
}