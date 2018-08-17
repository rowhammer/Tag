module.exports.run = async (Tag, msg, args) => {
    let Discord = require('discord.js');
    let author = msg.author;
    let server = msg.guild;
    if (server.id !== "473223354330120203") {
        msg.delete();
        msg.member.send(`You'll probably want to try that in here :wink: \nhttps://discord.gg/BVtZnvk`)
    } else {
        const downsend = new Discord.RichEmbed()
            .setTitle(`Click here to download Hydrogen`)
            .setAuthor(`Download Hydrogen`, msg.author.avatarURL)
            .setDescription(`requested by member ${msg.author.username}`)
            .setColor(0x551A8B)
            .setURL(`https://hydrogenmods.co.uk/threads/download-hydrogen-v1-8-2.4/`)
            .setThumbnail(msg.guild.iconURL)
            .addField(`Account Creation Required`, `Go to the website to create an account`)
            .setFooter(`Menu by The Vatch`)
            .setTimestamp()
        msg.delete();
        msg.member.send({
            embed: downsend
        });
    }
}

module.exports.help = {
    name: "download"
};
