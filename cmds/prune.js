module.exports.run = async(Tag, msg, args) => {
    const config = require('./config.json');
    if (msg.author.id === config.vatchID) {
    msg.guild.pruneMembers(30, true)
        .then(pruned => msg.channel.send(`This will prune ${pruned} members`))
        .catch(console.error);
    }
}

module.exports.help = {
    name: "prune"
}