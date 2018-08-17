module.exports.run = async(Tag, msg, args) => {
    let Discord = require('discord.js')
    let skrrtsend = new Discord.RichEmbed()
        .setTitle(`skrrt skrrt`)
        .setImage(`https://pl.scdn.co/images/pl/default/31f441b0518946e339232860ce2e65922673b62e`)
        .setURL(`https://www.youtube.com/watch?v=Y6QrHW1JYhw`)
        .setFooter(`skrrt skrrt`)
    msg.channel.send({
        embed: skrrtsend
    })
    console.log(`skrrt ${msg.author.username} skrrt`)
}

module.exports.help = {
    name: "skrrt"
}