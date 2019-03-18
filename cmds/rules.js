module.exports.run = async(Tag, msg, args) => {
if (msg.author.id !== "391736039879999489") return msg.delete();
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
        .setColor(0x663399)
        .setAuthor(msg.guild.name, msg.guild.iconURL)
        .addField('1.', 'No posting other Discord or TeamSpeak servers')
        .addField('2.', 'Do not spam, flame or insult users; posting words, images or links that could cause emotional or physical harm can result in a heavy punishment. (Posting seizure inducing gifs, gore, very offensive words, etc.)')    
        .addField('3.', 'No links may contain advertisements of any kind, pornography, racism, or disturbing content. Posting malicious links (IP grabbers, malware, adlinks, etc.) will result in a punishment.')
        .addField('4.', 'Do not advertise streams or YouTube-channels. Do not join the server to promote content.')
        .addField('5.', 'No personal information, no addresses, no phone numbers, SSN or NI numbers or anything of those sorts.')
        .addField('6.', 'Do not post any links to any mods or anything downloadable unless asked to by mods!')
        .addField('7.', 'Do not tag any user for something unnecessary, this also includes any selfbot that tags users! If you are caught doing this it will result in a first warning, if you are caught doing it again it will result in a permanent ban!')
        .addField('8.', 'If you catch any member of this server breaking these rules and a mod/manager/owner is not around you can make a screenshot of it and DM one of them.This could, depending on the severity of breaking one of the rule(s) lead to you getting the \'Contributor\' role.')
        .addField('9.', 'Talking about anything related to modding, cheating or anything that is not in line with the Discord ToS is not allowed! You will be punished if you still try to do so!')
        .addField('10.', 'Alternative accounts are allowed unless they are found to be abusive or harrassing the staff. Main accounts may also be banned if the behaviour continues (If it\'s not banned already.)')
        .addField('11.', 'OWNERS/ADMINISTRATORS/SUPERVISORS HAVE THE FINAL SAY')
        msg.channel.send({embed})
}
module.exports.help = {
    name: "rules"
}

module.exports.conf = {
    aliases: ['obey']
}