module.exports.run = async(Tag, msg, args) => {
    const Discord = require('discord.js');
    const vcsend = new Discord.RichEmbed()
        .setColor(0xaa00ff)
        .setAuthor('YA\'LL NEED JESUS! and this...', msg.guild.iconURL)
        .addField('Visual C++ Redistributable' ,'[This may help](https://www.microsoft.com/en-gb/download/details.aspx?id=48145)')
        .addField('Being A Silly Sausage', 'Make sure you don\'t have any other files that will interfere with injection (norty)')
        .setFooter(`Requested by ${msg.author.username}`, msg.author.avatarURL)

    msg.delete();
    msg.channel.send({
        embed: vcsend
    });
    console.log(`Files sent by ${msg.author.username} in ${msg.channel.name}`);
    // msg.channel.send({
    //     files: [{
    //         attachment: './res/FixHydrogen.bat',
    //         name: 'FixHydrogen.bat'
    //     }]
    // })
}

module.exports.help = {
    name: 'files'
}
