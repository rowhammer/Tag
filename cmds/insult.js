module.exports.run = async(Tag, msg, args) => {
    config = require('../config.json');
    let insults = config.insults;
    let insult = insults[Math.floor(Math.random() * insults.length)];
    if (msg.author.bot) {
        msg.channel.send(`Fuck off, ${msg.author.username}, bots can't use this`);
    } else {
        msg.delete();
        msg.channel.send(`${insult} *- from ${msg.author.username}*`);
    }
    console.log(`Insult sent to ${msg.author.username}`);
}

module.exports.help = {
    name: 'insult'
}