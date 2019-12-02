module.exports.run = async(Tag, msg, args) => {
    const Discord = require('discord.js')
    let member = msg.member;
    let userrole = member.guild.roles.find("name", "Site Members")
    const welcomechan = member.guild.channels.find("name", "welcome");
    var num = Math.floor(Math.random() * 9000000) + 1000000;
    const newuserinfo = new Discord.MessageEmbed()
        .setAuthor(`Welcome to ${member.guild.name}, our GTA 5 Community!`, member.guild.iconURL())
        .setColor(num)
        .setThumbnail(member.user.avatarURL())
        .addField('User', `<@${member.user.id}>`, true)
        .addField('Information', 'Make sure to properly read the <#391933625915932674> channel to make sure you don\'t break any rules.', true)
        .addField('Agreement', 'Read the message from Bender (my sweeet lover)')
        .setFooter(`Welcome to ${member.guild.name}`)
        .setTimestamp()
        msg.channel.send({embed: newuserinfo})
}

module.exports.help = {
    name: 'welcome'
}

module.exports.conf = {
    aliases: ['hey']
}