const fs = require('fs');
module.exports.run = async(Tag, msg, args) => {

    let tagchan = msg.guild.channels.find("name", "bot_log");
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("Get more perms ni:b::b:a");

    let toMute = msg.mentions.members.first() || msg.guild.members.get(args[0]);
    if (!toMute) return msg.channel.send("**Who though?**");

    let role = msg.guild.roles.find(r => r.name === "Muted");
    if (!role || !toMute.roles.has(role.id)) return msg.channel.send("**They can talk already**");

    await toMute.removeRole(role);
    delete Tag.mutes[toMute.id];

    fs.writeFile("../Data/blocks.json", JSON.stringify(Tag.mutes), err => {
        if (err) throw err;
        msg.channel.send("**Fine, they're back**")
        tagchan.send(`Unmuted ${toMute.user.tag}`)
        console.log(`${toMute.user.tag} unmuted`)
    })
}

module.exports.help = {
    name: "unmute"
}

module.exports.conf = {
    aliases: ['unshhh']
}