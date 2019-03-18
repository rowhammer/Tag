module.exports.run = async(Tag, msg, args) => {
    let Discord = require("discord.js");
    if (msg.author.id === '391736039879999489') {
        let reason = args.slice(1).join(` `);
        console.log(reason)
        let person = msg.mentions.users.first() || args[0];
        console.log(person)
        if (reason.length < 1) return msg.reply(`Must have a reason`);
        if (msg.mentions.users.size < 1) return msg.reply(`You must mention someone to warn them`);
        msg.delete()
        let warntext = new Discord.MessageEmbed()
            .setTitle(``)
            .setAuthor('Warning!', msg.author.avatarURL())
            .setColor(0xffa500)
            .setFooter(`Be nice!`)
            .setTimestamp()
            .addField('Reason', reason, true)
            .addField(`User:`, person, true)
            .addField(`Moderator`, `${msg.author.username}`, true);
        msg.channel.send({
            embed: warntext
        });
        msg.person.send(`You have been warned by ${msg.author.username} for this reason: ${reason} in the ${msg.guild.name}`)
        console.log(`Moderator: ${msg.author.username} warned user ${person.tag} with reason: ${reason}`)
    } else msg.channel.send(`Unauthorised`);
}

module.exports.help = {
    name: "warn"
}

module.exports.conf = {
    aliases: ['oi']
}