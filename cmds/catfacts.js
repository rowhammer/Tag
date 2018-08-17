module.exports.run = async(Tag, msg, args) => {
    config = require('../config.json');
    let catfacts = config.catfacts;
    let catfact = catfacts[Math.floor(Math.random() * catfacts.length)];
    if (msg.author.bot) {
        msg.channel.send(`Fuck off, ${msg.author.username}, bots can't use this`);
    } else {
        msg.channel.send(catfact);
    }
}
module.exports.help = {
    name: 'catfacts'
}