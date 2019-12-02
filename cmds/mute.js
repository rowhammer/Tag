const Discord = require('discord.js');
const fs = require('fs');
const ms = require('ms');
module.exports.run = async(Tag, msg, args) => {
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.member.send('You do not have this permission').catch(console.error);
    let toMute = msg.mentions.members.first() || msg.guild.members.get(args[0]);
    let duration;
    if (args[1]) {
        duration = args[1]
    } else duration = ms(1800000);
    if (!toMute) msg.member.send('Specify a user to mute').catch(console.error);
    if (duration < ms(60000)) return msg.member.send('too short fam')
    if (toMute.id === msg.author.id) msg.member.send('You cannot mute yourself').catch(console.error);
    if (toMute.highestRole.position >= msg.member.highestRole.position) return msg.member.send('You cannot mute someone higher or in the same role as you');

    let role = msg.guild.roles.find(r => r.name === "Muted");
    if (!role) {
        try {
            role = await msg.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            });
            msg.guild.channels.forEach(async(channel, id) => {
                await channel.overwritePermissions(role, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false,
                    READ_MESSAGES: false,
                    MANAGE_CHANNEL: false,
                    MANAGE_PERMISSIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    if (toMute.roles.has(role.id)) return msg.member.send('This user is already muted');

    Tag.mutes[toMute.id] = {
        guild: msg.guild.id,
        time: Date.now() + ms(duration)
    }
    await toMute.addRole(role);
    console.log(`${msg.author.username} muted ${toMute.user.username} for ${ms(duration)}`);
    time = args[1]
    msg.member.send(`${toMute.user.tag} has been muted for ${ms(ms(duration), {long: true})}`)
    
    let embed = new Discord.RichEmbed()
        .setAuthor("That's a mute!", msg.guild.iconURL)
        .setColor(0xff0000)
        .setThumbnail(toMute.user.avatarURL)
        .addField(`Muted`, toMute.user.username, true)
        .addField('Duration', ms(ms(duration), {long: true}))
        .setFooter(`by ${msg.author.username}`, msg.author.avatarURL)
        .setTimestamp()
    msg.channel.send({
        embed
    })
    

    fs.writeFile("../Data/blocks.json", JSON.stringify(Tag.mutes, null, 4), err => {
        if (err) throw err;
        if (!err) msg.member.send('(Success)');
    })
}

module.exports.help = {
    name: 'mute'
}

module.exports.conf = {
    aliases : ['shhh']
}