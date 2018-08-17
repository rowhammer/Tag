let Discord = require("discord.js")
var hextext = Math.floor(Math.random() * 16777215).toString(16);
module.exports.run = async(Tag, msg, args) => {
    let whoinfo = new Discord.RichEmbed()
        .addField("Name", msg.author.username)
        .setThumbnail(msg.author.avatarURL)
        .addField(`ID`, msg.author.id)
        .addField(`Roles`, msg.member.roles)
        .setColor(hextext)
    msg.channel.send({
        embed: whoinfo
    });
    console.log(`${msg.author.username} doesn't know who they are`);
}

module.exports.help = {
    name: "whoami"
}