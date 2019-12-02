module.exports.run = async(Tag, msg, args) => {
    const config = require('../config.json')

    if (msg.member.id === config.vatchID) {
        Tag.user.setActivity(args[0]);
        msg.channel.send(`Game set to ${args[0]}`)
        console.log(`Game set to ${args[0]} by ${msg.author.username}`);
    } else {
        return;
    }
}

module.exports.help = {
    name: "setgame"
}

module.exports.conf = {
    aliases: ['game']
}