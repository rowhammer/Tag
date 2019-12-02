module.exports.run = async (Tag, msg, args) => {
    const Discord = require('discord.js');
    let asks = args.slice(0).join(` `);
    config = require('../config.json');
    let fortunes = config.fortunes;
    let fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    if (msg.author.bot) {
        msg.channel.send(`Fuck off ${msg.author.username}, bots can't use this`)
    } else {
        msg.delete();
        const asksend = new Discord.RichEmbed()
            .setColor(0xffa500)
            .addField(`${msg.author.username}:`, asks)
            .addField(`${Tag.user.username}:`, fortune)
        msg.channel.send({
            embed: asksend
        })
    }
    console.log(`Fortune requested by ${msg.author.username}, Answer: ${fortune}`);
}

module.exports.help = {
    name: "ask",
    description: 'Ask a silly question, get a sily answer',
    usage: 'ask'
}

module.exports.conf = {
    aliases : ['a', 'yo']
}