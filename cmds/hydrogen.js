module.exports.run = async (Tag, msg, args) => {
    const Discord = require('discord.js')
    var author = msg.author;
    var server = msg.guild;

    if (server.id !== "501456464658038795") {
        msg.delete();
        msg.member.send(`You'll probably want to try that in here :wink: \nhttps://discord.gg/d8JZdc`)
    } else {
        let hydrousr = msg.mentions.members.first();
        const hydrosend = new Discord.RichEmbed()
            .setColor(3447003)
            .setThumbnail(msg.guild.iconURL)
            .setAuthor('Purchase Hydrogen', author.avatarURL)
            .setDescription(`requested by ${msg.author.username}`)
            .addField('Monthly', '£5', true)
            .addField('Lifetime', '£10', true)
            .addField('Please make an account', '[Click here to be taken to the website](https://www.hydrogenmods.co.uk/)')
            .setTimestamp()
        await msg.delete();
        if (!hydrousr) {
            await msg.member.send({
                embed: hydrosend
            })
        } else {
            await hydrousr.send({
                embed: hydrosend
            })
        }

        console.log(`Hydrogen links sent to ${hydrousr.user.username}`);
    }
    //  Add react with emojis
}

module.exports.help = {
    name: "hydrogen"
}

module.exports.conf = {
    aliases : ['hydro']
}