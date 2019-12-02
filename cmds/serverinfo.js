module.exports.run = async (Tag, msg, args) => {
    const Discord = require("discord.js")
    var num = Math.floor(Math.random() * 9000000) + 1000000;
    let author = msg.author;
    let server = msg.guild;
    var roles = new Array();
    for (var [flake, role] of server.roles) {
        roles.push(role.toString());
    }
    guildOwner = await Tag.fetchUser(msg.guild.ownerID)
    guildOwner = guildOwner.tag
    const infosend = new Discord.RichEmbed()
        .setColor(num)
        .setThumbnail(server.iconURL)
        .setAuthor(server.name, author.avatarURL)
        .setDescription(`requested by ${author.username}`)
        .addField('Total Members', server.memberCount, true)
        .addField('Location', server.region, true)
        .addField('Created at', server.createdAt.toLocaleString(), true)
        .addField('Owner', guildOwner, true)
        .addField("Roles [" + roles.length + "]", roles.join("\t"), false)
        .setTimestamp()
        .setFooter(Tag.user.username, Tag.user.avatarURL)
    msg.channel.send({
        embed: infosend
    })
}

module.exports.help = {
    name: "serverinfo"
}

module.exports.conf = {
    aliases: ['sinfo']
}