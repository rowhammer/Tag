module.exports.run = async(Tag, msg, args) => {

    const Discord = require('discord.js');
    var input = args.slice(0).join(' ');
    
    const pollembed = new Discord.RichEmbed()
        .setColor(0x4000FF)
        .addField(`**${input}**\n`, '✅ - Yes\n❌- No')
        
    msg.channel.send(pollembed).then(function (message) {
        message.react('✅')
        message.react('❌')
    })
    
}

module.exports.help = {
    name: 'poll'
}

module.exports.conf = {
    aliases: ['askserver']
}