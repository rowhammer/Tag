module.exports.run = async(Tag, msg, args) => {
    const Discord = require("discord.js")
    const ceasesend = new Discord.MessageEmbed()
    .setAuthor('CEASE AND DESIST')
    .setColor(25500)
    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Taketwo_logo.svg/1200px-Taketwo_logo.svg.png')
    .addField('TAKE YOUR MENU DOWN', 'NOW')
    .addField('I MEAN IT','I WILL BE FORCED TO DO FUCK ALL')
    .setFooter('love from TakeTwo')
    msg.channel.send({embed: ceasesend})

    console.log(`C&D from ${msg.author.username}`)
}

module.exports.help = {
    name: "c&d"
}